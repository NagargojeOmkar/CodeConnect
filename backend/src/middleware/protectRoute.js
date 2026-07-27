import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;

      if (!clerkId) {
        return res.status(401).json({
          message: "Unauthorized",
        });
      }

      let user = await User.findOne({ clerkId });

      if (!user) {
        const clerkUser = await clerkClient.users.getUser(clerkId);

        const email = clerkUser.emailAddresses[0]?.emailAddress;

        // 👇 check by email first
        user = await User.findOne({ email });

        if (user) {
          // existing account → update clerkId
          user.clerkId = clerkId;
          await user.save();
        } else {
          // create new user
          user = await User.create({
            clerkId,
            email,
            name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
            profileImage: clerkUser.imageUrl,
          });

          console.log("✅ User created automatically");
        }

        // 👇 Always make sure Stream user exists
        await upsertStreamUser({
          id: clerkId,
          name: user.name,
          image: user.profileImage,
        });
      }

      req.user = user;

      next();
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
];