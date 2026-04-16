import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { X, Gift, CreditCard, Phone, Wallet, Zap } from 'lucide-react';

const Onboarding = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const { user } = useAuth();
  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const steps = [
    { icon: <Gift className="w-10 h-10 text-[hsl(85,80%,55%)]" />, title: "Welcome Bonus", description: "You've received a welcome bonus of ₦180,000! This amount is already in your account and can be withdrawn after purchasing a PAY ID." },
    { icon: <CreditCard className="w-10 h-10 text-[hsl(85,80%,55%)]" />, title: "Get Your PAY ID", description: "To withdraw funds, you'll need to purchase a PAY ID for ₦7,250. This is a one-time purchase that unlocks all features of the app." },
    { icon: <Phone className="w-10 h-10 text-[hsl(85,80%,55%)]" />, title: "Airtime & Data", description: "You can purchase airtime and data for all major networks directly from the app." },
    { icon: <Wallet className="w-10 h-10 text-[hsl(85,80%,55%)]" />, title: "Withdrawal Process", description: "To withdraw your funds, tap the \"Withdraw\" button, enter your bank details and PAY ID, and submit your request." },
    { icon: <Zap className="w-10 h-10 text-[hsl(85,80%,55%)]" />, title: "Ready to Start", description: "You're all set! Explore the dashboard, manage your balance, and enjoy all PayGo features." },
  ];

  const currentStepData = steps[currentStep - 1];

  return (
    <>
      {/* Header */}
      <div className="bg-[hsl(120,8%,8%)] border-b border-[hsl(0,0%,15%)] p-5 relative">
        <button onClick={onComplete} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[hsl(0,0%,15%)] hover:bg-[hsl(0,0%,20%)] transition-colors">
          <X className="w-4 h-4 text-[hsl(0,0%,60%)]" />
        </button>
        <h2 className="text-white font-bold text-lg mb-1">Welcome to PayGo, {user?.name}!</h2>
        <p className="text-[hsl(0,0%,50%)] text-xs mb-3">Step {currentStep} of {totalSteps}</p>
        <div className="flex space-x-1">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div key={i} className={`flex-1 h-1.5 rounded-full transition-colors ${i < currentStep ? 'bg-[hsl(85,80%,55%)]' : 'bg-[hsl(0,0%,20%)]'}`} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-[hsl(120,8%,10%)] p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="w-16 h-16 bg-[hsl(85,80%,55%)]/10 rounded-2xl flex items-center justify-center">
            {currentStepData.icon}
          </div>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{currentStepData.title}</h3>
        <p className="text-[hsl(0,0%,50%)] mb-6 text-sm leading-relaxed">{currentStepData.description}</p>
        <button
          onClick={handleNext}
          className="w-full py-3.5 rounded-xl text-[hsl(120,10%,6%)] font-semibold text-sm bg-gradient-to-r from-[hsl(85,80%,55%)] to-[hsl(60,80%,55%)] hover:opacity-90 transition-opacity"
        >
          {currentStep === totalSteps ? 'Continue to Dashboard →' : 'Next →'}
        </button>
      </div>
    </>
  );
};

export default Onboarding;
