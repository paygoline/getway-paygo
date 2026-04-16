import { Gift, X } from 'lucide-react';

const ReferEarnPopup = ({ onClose }: { onClose: () => void }) => {
  const handleShareOnWhatsApp = () => {
    const referralLink = 'https://paygo-financial-pro-71-b0b4.vercel.app';
    const message = `Join PayGo and earn money! Use my referral link: ${referralLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-[hsl(120,8%,10%)] border border-[hsl(0,0%,15%)] rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="relative bg-[hsl(120,8%,8%)] border-b border-[hsl(0,0%,15%)] p-4">
          <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[hsl(0,0%,15%)] hover:bg-[hsl(0,0%,20%)] transition-colors">
            <X className="w-4 h-4 text-[hsl(0,0%,60%)]" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-[hsl(85,80%,55%)] rounded-lg flex items-center justify-center">
              <span className="text-[hsl(120,10%,6%)] text-xs font-bold">⚡</span>
            </div>
            <span className="text-white font-semibold">Refer & Earn</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="w-14 h-14 bg-[hsl(85,80%,55%)]/10 rounded-2xl flex items-center justify-center">
              <Gift className="w-7 h-7 text-[hsl(85,80%,55%)]" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Earn ₦5,000!</h3>
          <p className="text-[hsl(0,0%,50%)] mb-6 text-sm leading-relaxed">
            Invite your friends using your referral link. Earn ₦5,000 for each successful signup.
          </p>
          <button
            onClick={handleShareOnWhatsApp}
            className="w-full py-3.5 rounded-xl text-[hsl(120,10%,6%)] font-semibold text-sm bg-gradient-to-r from-[hsl(85,80%,55%)] to-[hsl(60,80%,55%)] hover:opacity-90 transition-opacity mb-3"
          >
            📱 Share on WhatsApp
          </button>
          <p className="text-[hsl(0,0%,40%)] text-xs">Start earning and save on PAY ID costs today!</p>
        </div>
      </div>
    </div>
  );
};

export default ReferEarnPopup;
