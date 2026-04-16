import { Zap, Shield, TrendingUp } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

const LandingPage = ({ onGetStarted, onSignIn }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-[hsl(120,10%,6%)] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Floating dots */}
      <div className="absolute top-12 left-8 w-2 h-2 rounded-full bg-[hsl(85,80%,55%)] opacity-60" />
      <div className="absolute top-6 right-24 w-1.5 h-1.5 rounded-full bg-[hsl(85,80%,55%)] opacity-40" />
      <div className="absolute top-20 right-6 w-2 h-2 rounded-full bg-[hsl(85,80%,55%)] opacity-50" />
      <div className="absolute bottom-40 left-6 w-1.5 h-1.5 rounded-full bg-[hsl(85,80%,55%)] opacity-30" />
      <div className="absolute bottom-32 right-12 w-2 h-2 rounded-full bg-[hsl(85,80%,55%)] opacity-40" />

      {/* Radial glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[hsl(85,60%,30%)] opacity-[0.07] blur-[100px]" />

      {/* Logo */}
      <div className="mb-4 z-10">
        <div className="w-10 h-10 bg-gradient-to-br from-[hsl(85,80%,55%)] to-[hsl(60,80%,50%)] rounded-lg flex items-center justify-center text-[hsl(120,10%,6%)] font-bold text-xl">
          P
        </div>
      </div>

      {/* App Name */}
      <h1 className="text-5xl font-bold text-[hsl(85,80%,55%)] mb-4 z-10">PayGo</h1>

      {/* Tagline */}
      <p className="text-[hsl(0,0%,65%)] text-center text-base mb-8 z-10 max-w-xs">
        The future of banking. Seamless, secure, and built for you.
      </p>

      {/* Feature badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 z-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(0,0%,20%)] bg-[hsl(120,10%,10%)]">
          <Zap className="w-4 h-4 text-[hsl(85,80%,55%)]" />
          <span className="text-[hsl(0,0%,85%)] text-sm">Instant Transfers</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(0,0%,20%)] bg-[hsl(120,10%,10%)]">
          <Shield className="w-4 h-4 text-[hsl(85,80%,55%)]" />
          <span className="text-[hsl(0,0%,85%)] text-sm">Bank-Grade Security</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(0,0%,20%)] bg-[hsl(120,10%,10%)]">
          <TrendingUp className="w-4 h-4 text-[hsl(85,80%,55%)]" />
          <span className="text-[hsl(0,0%,85%)] text-sm">Smart Earnings</span>
        </div>
      </div>

      {/* CTA Card */}
      <div className="w-full max-w-sm z-10 bg-[hsl(120,8%,10%)] border border-[hsl(0,0%,15%)] rounded-2xl p-6">
        <button
          onClick={onGetStarted}
          className="w-full py-4 rounded-xl text-[hsl(120,10%,6%)] font-semibold text-base bg-gradient-to-r from-[hsl(85,80%,55%)] to-[hsl(60,80%,55%)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          Get Started
          <span className="text-lg">→</span>
        </button>

        <p className="text-center mt-4 text-[hsl(0,0%,55%)] text-sm">
          Already have an account?{' '}
          <button onClick={onSignIn} className="text-[hsl(85,80%,55%)] font-medium hover:underline">
            Sign in
          </button>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center gap-2 z-10">
        <div className="w-2 h-2 rounded-full bg-[hsl(85,80%,55%)]" />
        <span className="text-[hsl(0,0%,45%)] text-xs">Secure • Fast • Trusted</span>
      </div>
    </div>
  );
};

export default LandingPage;
