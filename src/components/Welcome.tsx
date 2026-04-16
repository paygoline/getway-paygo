import { useAuth } from '../contexts/AuthContext';
import { Gift } from 'lucide-react';

const Welcome = () => {
  const { completeWelcome } = useAuth();

  return (
    <div className="min-h-screen bg-[hsl(120,10%,6%)] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[hsl(85,60%,30%)] opacity-[0.07] blur-[100px]" />

      <div className="w-full max-w-sm z-10 text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-[hsl(85,80%,55%)] to-[hsl(60,80%,50%)] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Gift className="w-10 h-10 text-[hsl(120,10%,6%)]" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">Welcome to PayGo!</h1>
        <p className="text-[hsl(0,0%,55%)] text-sm mb-2">
          As a new user, you'll receive a generous welcome bonus of
        </p>
        <p className="text-3xl font-bold text-[hsl(85,80%,55%)] mb-2">₦180,000</p>
        <p className="text-[hsl(0,0%,55%)] text-sm mb-8">
          which can be withdrawn at any time. Yes, you read that right — it's yours to keep!
        </p>

        <button
          onClick={completeWelcome}
          className="w-full py-4 rounded-xl text-[hsl(120,10%,6%)] font-semibold text-base bg-gradient-to-r from-[hsl(85,80%,55%)] to-[hsl(60,80%,55%)] hover:opacity-90 transition-opacity"
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Welcome;
