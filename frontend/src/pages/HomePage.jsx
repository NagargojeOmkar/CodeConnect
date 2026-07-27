import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
  Linkedin,
  Github,
  Globe,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <>
      {/* Animated gradient background – subtle movement */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
      `}</style>

      <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300 animate-gradient">
        {/* NAVBAR */}
        <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
            {/* LOGO */}
            <Link
              to={"/"}
              className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
            >
              <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                <SparklesIcon className="size-6 text-white" />
              </div>

              <div className="flex flex-col">
                <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
                  CodeConnect
                </span>
                <span className="text-xs text-base-content/60 font-medium -mt-1">
                  Code Together
                </span>
              </div>
            </Link>

            {/* AUTH BTN */}
            <SignInButton mode="modal">
              <button className="group px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                <span>Get Started</span>
                <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </SignInButton>
          </div>
        </nav>

        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              <div className="badge badge-primary badge-lg">
                <ZapIcon className="size-4" />
                Real-time Collaboration
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Code Together,
                </span>
                <br />
                <span className="text-base-content">Learn Together</span>
              </h1>

              <p className="text-xl text-base-content/70 leading-relaxed max-w-xl">
                The ultimate platform for collaborative coding interviews and pair programming.
                Connect face-to-face, code in real-time, and ace your technical interviews.
              </p>

              {/* FEATURE PILLS */}
              <div className="flex flex-wrap gap-3">
                <div className="badge badge-lg badge-outline">
                  <CheckIcon className="size-4 text-success" />
                  Live Video Chat
                </div>
                <div className="badge badge-lg badge-outline">
                  <CheckIcon className="size-4 text-success" />
                  Code Editor
                </div>
                <div className="badge badge-lg badge-outline">
                  <CheckIcon className="size-4 text-success" />
                  Multi-Language
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <SignInButton mode="modal">
                  <button className="btn btn-primary btn-lg">
                    Start Coding Now
                    <ArrowRightIcon className="size-5" />
                  </button>
                </SignInButton>

                <button className="btn btn-outline btn-lg">
                  <VideoIcon className="size-5" />
                  Watch Demo
                </button>
              </div>

              {/* STATS */}
              <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg">
                <div className="stat">
                  <div className="stat-value text-primary">10K+</div>
                  <div className="stat-title">Active Users</div>
                </div>
                <div className="stat">
                  <div className="stat-value text-secondary">50K+</div>
                  <div className="stat-title">Sessions</div>
                </div>
                <div className="stat">
                  <div className="stat-value text-accent">99.9%</div>
                  <div className="stat-title">Uptime</div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <img
              src="/hero.png"
              alt="CodeCollab Platform"
              className="w-full h-auto rounded-3xl shadow-2xl border-4 border-base-100 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* WAVE DIVIDER – smooth transition to features */}
        <div className="relative -mb-1">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 60L48 53.3C96 46.7 192 33.3 288 40C384 46.7 480 73.3 576 73.3C672 73.3 768 46.7 864 40C960 33.3 1056 46.7 1152 56.7C1248 66.7 1344 73.3 1392 76.7L1440 80V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
              fill="currentColor"
              className="text-base-100"
            />
          </svg>
        </div>

        {/* FEATURES SECTION */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="text-primary font-mono">Succeed</span>
            </h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Powerful features designed to make your coding interviews seamless and productive
            </p>
          </div>

          {/* FEATURES GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="card-body items-center text-center">
                <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <VideoIcon className="size-8 text-primary" />
                </div>
                <h3 className="card-title">HD Video Call</h3>
                <p className="text-base-content/70">
                  Crystal clear video and audio for seamless communication during interviews
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="card-body items-center text-center">
                <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Code2Icon className="size-8 text-primary" />
                </div>
                <h3 className="card-title">Live Code Editor</h3>
                <p className="text-base-content/70">
                  Collaborate in real-time with syntax highlighting and multiple language support
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="card-body items-center text-center">
                <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <UsersIcon className="size-8 text-primary" />
                </div>
                <h3 className="card-title">Easy Collaboration</h3>
                <p className="text-base-content/70">
                  Share your screen, discuss solutions, and learn from each other in real-time
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER WITH SOCIAL HANDLES – modern glass design */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-base-100/40 backdrop-blur-md border border-primary/20 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col items-center gap-6">
              <div className="text-center space-y-2">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Let’s Connect
                </h3>
                <p className="text-base-content/60 text-sm max-w-md">
                  I'm always open to collaborating on interesting projects. Reach out through any of
                  the channels below.
                </p>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/omkarnagargoje/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-circle text-base-content hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin className="size-6" />
                </a>
                <a
                  href="https://github.com/NagargojeOmkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-circle text-base-content hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="size-6" />
                </a>
                <a
                  href="https://360bit.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-circle text-base-content hover:text-primary hover:bg-primary/10 transition-all duration-300 relative group"
                >
                  <Globe className="size-6" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-base-content/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Coming Soon
                  </span>
                </a>
              </div>
              <div className="pt-4 border-t border-base-content/10 w-full text-center">
                <p className="text-sm text-base-content/50">
                  Made with ❤️ by Omkar Nagargoje · © {new Date().getFullYear()} CodeConnect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;