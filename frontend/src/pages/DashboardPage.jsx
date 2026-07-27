import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useActiveSessions, useCreateSession, useMyRecentSessions } from "../hooks/useSessions";

import Navbar from "../components/Navbar";
import WelcomeSection from "../components/WelcomeSection";
import StatsCards from "../components/StatsCards";
import ActiveSessions from "../components/ActiveSessions";
import RecentSessions from "../components/RecentSessions";
import CreateSessionModal from "../components/CreateSessionModal";

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });

  const createSessionMutation = useCreateSession();

  const { data: activeSessionsData, isLoading: loadingActiveSessions } = useActiveSessions();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } = useMyRecentSessions();

  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return;

    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty.toLowerCase(),
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data.session._id}`);
        },
      }
    );
  };

  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  const isUserInSession = (session) => {
    if (!user.id) return false;
    return session.host?.clerkId === user.id || session.participant?.clerkId === user.id;
  };

  return (
    <>
      {/* Global animations & backgrounds */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .bg-animate {
          background-size: 200% 200%;
          animation: gradientMove 10s ease infinite;
        }
      `}</style>

      <div className="min-h-screen bg-base-300 relative overflow-hidden">
        {/* Decorative floating blobs */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <Navbar />
        <WelcomeSection onCreateSession={() => setShowCreateModal(true)} />

        {/* Motivational banner */}
        <div className="container mx-auto px-6 mb-8 animate-fade-up">
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 bg-animate border border-primary/30 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
            <p className="text-center text-lg font-medium text-base-content">
              🚀 <span className="font-bold">Tip:</span> Practise with a friend or interviewer in a distraction‑free, real‑time coding space. You’re one click away from your next breakthrough!
            </p>
          </div>
        </div>

        {/* Grid layout – 2 columns to avoid blank space */}
        <div className="container mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Stats column */}
            <div className="animate-fade-up delay-1">
              <div className="mb-2">
                <h2 className="text-xl font-bold text-base-content/80">📊 Your Overview</h2>
              </div>
              <StatsCards
                activeSessionsCount={activeSessions.length}
                recentSessionsCount={recentSessions.length}
              />
            </div>

            {/* Active sessions column */}
            <div className="animate-fade-up delay-2">
              <div className="mb-2">
                <h2 className="text-xl font-bold text-base-content/80">🟢 Live Sessions</h2>
              </div>
              <ActiveSessions
                sessions={activeSessions}
                isLoading={loadingActiveSessions}
                isUserInSession={isUserInSession}
              />
            </div>
          </div>

          {/* Recent Sessions (full width) */}
          <div className="mt-10 animate-fade-up delay-3">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-base-content/80">🕘 Past Sessions</h2>
              <p className="text-sm text-base-content/50 mt-1">Continue where you left off or review previous collaborations.</p>
            </div>
            <RecentSessions sessions={recentSessions} isLoading={loadingRecentSessions} />
          </div>

          {/* Call-to-action floating card */}
          <div className="mt-12 animate-fade-up delay-4">
            <div className="bg-base-100/70 backdrop-blur-md border border-primary/20 rounded-2xl p-8 text-center shadow-xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ready to Code?
              </h3>
              <p className="text-base-content/60 mt-2 max-w-md mx-auto">
                Create a new session, invite a peer, and start solving problems together in real‑time.
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="mt-6 btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <span>➕ Create New Session</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </>
  );
}

export default DashboardPage;