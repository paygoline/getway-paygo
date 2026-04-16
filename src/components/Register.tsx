import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ArrowLeft, User, AtSign, Mail, Phone, Lock, Grid, Eye, EyeOff } from 'lucide-react';

interface RegisterProps {
  onSwitchToLogin: () => void;
}

const Register = ({ onSwitchToLogin }: RegisterProps) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (name && email && password) {
      const result = register(name, email, password);
      if (!result.success && result.error) {
        setError(result.error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(120,10%,6%)] relative overflow-hidden">
      {/* Floating dots */}
      <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[hsl(85,80%,55%)] opacity-50" />
      <div className="absolute top-16 right-8 w-1.5 h-1.5 rounded-full bg-[hsl(85,80%,55%)] opacity-40" />

      {/* Back button */}
      <button onClick={onSwitchToLogin} className="flex items-center gap-2 text-[hsl(0,0%,70%)] p-4 pt-8">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Back</span>
      </button>

      <div className="px-6 pb-8">
        {/* Header */}
        <div className="flex items-start gap-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-[hsl(85,80%,55%)] to-[hsl(60,80%,50%)] rounded-lg flex items-center justify-center text-[hsl(120,10%,6%)] font-bold text-sm mt-1">
            P
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Join PayGo</h1>
            <p className="text-[hsl(0,0%,55%)] text-sm">
              Create your account & claim your{' '}
              <span className="text-[hsl(85,80%,55%)] font-bold">₦170,000</span>{' '}
              welcome bonus
            </p>
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
            <label className="text-[hsl(0,0%,50%)] text-xs uppercase tracking-wider font-medium mb-2 block">Full Name</label>
            <div className="flex items-center gap-3 bg-[hsl(120,10%,6%)] border border-[hsl(0,0%,18%)] rounded-xl px-4 py-3">
              <User className="w-4 h-4 text-[hsl(0,0%,40%)]" />
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent text-white text-sm placeholder-[hsl(0,0%,35%)] w-full outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-[hsl(0,0%,50%)] text-xs uppercase tracking-wider font-medium mb-2 block">Username</label>
            <div className="flex items-center gap-3 bg-[hsl(120,10%,6%)] border border-[hsl(0,0%,18%)] rounded-xl px-4 py-3">
              <AtSign className="w-4 h-4 text-[hsl(0,0%,40%)]" />
              <input
                type="text"
                placeholder="Only lowercase letters, numbers & _"
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                className="bg-transparent text-white text-sm placeholder-[hsl(0,0%,35%)] w-full outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-[hsl(0,0%,50%)] text-xs uppercase tracking-wider font-medium mb-2 block">Email Address</label>
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
            <label className="text-[hsl(0,0%,50%)] text-xs uppercase tracking-wider font-medium mb-2 block">Phone Number</label>
            <div className="flex items-center gap-3 bg-[hsl(120,10%,6%)] border border-[hsl(0,0%,18%)] rounded-xl px-4 py-3">
              <Phone className="w-4 h-4 text-[hsl(0,0%,40%)]" />
              <input
                type="tel"
                placeholder="e.g. 08012345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-transparent text-white text-sm placeholder-[hsl(0,0%,35%)] w-full outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-[hsl(0,0%,50%)] text-xs uppercase tracking-wider font-medium mb-2 block">Password</label>
            <div className="flex items-center gap-3 bg-[hsl(120,10%,6%)] border border-[hsl(0,0%,18%)] rounded-xl px-4 py-3">
              <Lock className="w-4 h-4 text-[hsl(0,0%,40%)]" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Min 6 characters"
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

          <div>
            <label className="text-[hsl(0,0%,50%)] text-xs uppercase tracking-wider font-medium mb-2 block">Referral Code (Optional)</label>
            <div className="flex items-center gap-3 bg-[hsl(120,10%,6%)] border border-[hsl(0,0%,18%)] rounded-xl px-4 py-3">
              <Grid className="w-4 h-4 text-[hsl(0,0%,40%)]" />
              <input
                type="text"
                placeholder="e.g. PAYGOAB1234"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                className="bg-transparent text-white text-sm placeholder-[hsl(0,0%,35%)] w-full outline-none"
              />
            </div>
          </div>

          <p className="text-[hsl(0,0%,45%)] text-xs">
            By creating an account you agree to our{' '}
            <span className="text-[hsl(85,80%,55%)]">Terms of Service</span> and{' '}
            <span className="text-[hsl(85,80%,55%)]">Privacy Policy</span>
          </p>

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-[hsl(120,10%,6%)] font-semibold text-base bg-gradient-to-r from-[hsl(85,80%,55%)] to-[hsl(60,80%,55%)] hover:opacity-90 transition-opacity"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
