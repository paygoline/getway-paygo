import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onSwitchToRegister: () => void;
}

const Login = ({ onSwitchToRegister }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    const loginSuccess = login(email, password);
    if (!loginSuccess) {
      setError('Invalid email or password. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(120,10%,6%)] relative overflow-hidden">
      {/* Floating dots */}
      <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[hsl(85,80%,55%)] opacity-50" />
      <div className="absolute top-16 right-8 w-1.5 h-1.5 rounded-full bg-[hsl(85,80%,55%)] opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-[hsl(85,60%,30%)] opacity-[0.05] blur-[80px]" />

      {/* Back button */}
      <button onClick={onSwitchToRegister} className="flex items-center gap-2 text-[hsl(0,0%,70%)] p-4 pt-8">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Back</span>
      </button>

      <div className="px-6 pt-8 pb-8">
        {/* Header */}
        <div className="flex items-start gap-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-[hsl(85,80%,55%)] to-[hsl(60,80%,50%)] rounded-lg flex items-center justify-center text-[hsl(120,10%,6%)] font-bold text-sm mt-1">
            P
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
            <p className="text-[hsl(0,0%,55%)] text-sm">Sign in to your PayGo account</p>
          </div>
        </div>

        {error && (
          <div className="bg-red-900/30 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[hsl(120,8%,10%)] border border-[hsl(0,0%,15%)] rounded-2xl p-5 space-y-5">
          <div>
            <label className="text-[hsl(0,0%,50%)] text-xs uppercase tracking-wider font-medium mb-2 block">Email</label>
            <div className="flex items-center gap-3 bg-[hsl(120,10%,6%)] border border-[hsl(0,0%,18%)] rounded-xl px-4 py-3">
              <Mail className="w-4 h-4 text-[hsl(0,0%,40%)]" />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-white text-sm placeholder-[hsl(0,0%,35%)] w-full outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-[hsl(0,0%,50%)] text-xs uppercase tracking-wider font-medium mb-2 block">Password</label>
            <div className="flex items-center gap-3 bg-[hsl(120,10%,6%)] border border-[hsl(0,0%,18%)] rounded-xl px-4 py-3">
              <Lock className="w-4 h-4 text-[hsl(0,0%,40%)]" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent text-white text-sm placeholder-[hsl(0,0%,35%)] w-full outline-none"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff className="w-4 h-4 text-[hsl(0,0%,40%)]" /> : <Eye className="w-4 h-4 text-[hsl(0,0%,40%)]" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-[hsl(120,10%,6%)] font-semibold text-base bg-gradient-to-r from-[hsl(85,80%,55%)] to-[hsl(60,80%,55%)] hover:opacity-90 transition-opacity"
          >
            Sign in
          </button>
        </form>

        <p className="text-center mt-6 text-[hsl(0,0%,55%)] text-sm">
          Don't have an account?{' '}
          <button onClick={onSwitchToRegister} className="text-[hsl(85,80%,55%)] font-medium hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
