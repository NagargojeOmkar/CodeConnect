import express from "express";
import fs from "fs";
import path from "path";
import { exec } from "child_process";

const router = express.Router();

const tempDir = path.join(process.cwd(), "temp");

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

router.post("/", async (req, res) => {
  const { language, code } = req.body;

  let filePath = "";
  let command = "";

  try {
    switch (language) {
      case "python":
        filePath = path.join(tempDir, "main.py");
        fs.writeFileSync(filePath, code);
        command = `python "${filePath}"`;
        break;

      case "javascript":
        filePath = path.join(tempDir, "main.js");
        fs.writeFileSync(filePath, code);
        command = `node "${filePath}"`;
        break;

      case "java":
        filePath = path.join(tempDir, "Main.java");
        fs.writeFileSync(filePath, code);

        command = `cmd /c "cd /d ${tempDir} && javac Main.java && java Main"`;
        break;

      default:
        return res.status(400).json({
          success: false,
          error: "Unsupported language",
        });
    }

    exec(command, (error, stdout, stderr) => {
      // cleanup
      try {
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

        if (language === "java") {
          const classFile = path.join(tempDir, "Main.class");
          if (fs.existsSync(classFile)) fs.unlinkSync(classFile);
        }
      } catch {}

      if (error) {
        return res.json({
          success: false,
          error: stderr || error.message,
        });
      }

      return res.json({
        success: true,
        output: stdout || "No Output",
      });
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

export default router;