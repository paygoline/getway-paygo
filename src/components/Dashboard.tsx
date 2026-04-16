import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useAutoSlide } from '../hooks/useAutoSlide';
import { Bell, Eye, EyeOff, ArrowUp, ArrowDown, CheckCircle, CreditCard, BarChart3, Database, Headphones, Globe, DollarSign, User, History } from 'lucide-react';
import { CarouselApi } from '@/components/ui/carousel';
import BuyPayId from './BuyPayId';
import Transfer from './Transfer';
import Airtime from './Airtime';
import Data from './Data';
import Support from './Support';
import EarnMore from './EarnMore';
import Profile from './Profile';
import ProfileInfo from './ProfileInfo';
import About from './About';
import TransactionHistory from './TransactionHistory';
import ReferEarn from './ReferEarn';
import Upgrade from './Upgrade';
import JoinCommunities from './JoinCommunities';
import Onboarding from './Onboarding';
import ReferEarnPopup from './ReferEarnPopup';

const Dashboard = () => {
  const { user, logout, isOnboardingComplete, completeOnboarding, showReferPopup, hideReferPopup } = useAuth();
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [api, setApi] = useState<CarouselApi>();
  const [currentView, setCurrentView] = useState('dashboard');
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [showOnboardingPopup, setShowOnboardingPopup] = useState(!isOnboardingComplete);

  useAutoSlide(api, 4000);

  const confirmLogout = () => { logout(); setShowLogoutDialog(false); };
  const cancelLogout = () => { setShowLogoutDialog(false); };
  const handleCompleteOnboarding = () => { completeOnboarding(); setShowOnboardingPopup(false); };

  const quickActions = [
    { icon: <CreditCard className="w-5 h-5" />, label: "Buy PAY ID", action: () => setCurrentView('buy-pay-id'), color: 'from-[hsl(85,80%,55%)] to-[hsl(60,80%,50%)]' },
    { icon: <Eye className="w-5 h-5" />, label: "Watch", action: () => window.open('https://t.me/Paygofficial', '_blank'), color: 'from-[hsl(200,60%,40%)] to-[hsl(200,60%,30%)]' },
    { icon: <BarChart3 className="w-5 h-5" />, label: "Airtime", action: () => setCurrentView('airtime'), color: 'from-[hsl(260,60%,50%)] to-[hsl(260,60%,40%)]' },
    { icon: <Database className="w-5 h-5" />, label: "Data", action: () => setCurrentView('data'), color: 'from-[hsl(0,60%,50%)] to-[hsl(0,60%,40%)]' },
    { icon: <Headphones className="w-5 h-5" />, label: "Support", action: () => setCurrentView('support'), color: 'from-[hsl(220,30%,40%)] to-[hsl(220,30%,30%)]' },
    { icon: <Globe className="w-5 h-5" />, label: "Group", action: () => setCurrentView('join-communities'), color: 'from-[hsl(180,60%,40%)] to-[hsl(180,60%,30%)]' },
    { icon: <DollarSign className="w-5 h-5" />, label: "Earn More", action: () => setCurrentView('earn-more'), color: 'from-[hsl(45,80%,50%)] to-[hsl(45,80%,40%)]' },
    { icon: <User className="w-5 h-5" />, label: "Profile", action: () => setCurrentView('profile'), color: 'from-[hsl(0,0%,40%)] to-[hsl(0,0%,30%)]' },
  ];

  // Sub-view routing
  if (currentView === 'buy-pay-id') return <BuyPayId />;
  if (currentView === 'transfer') return <Transfer onBack={() => setCurrentView('dashboard')} />;
  if (currentView === 'airtime') return <Airtime onBack={() => setCurrentView('dashboard')} />;
  if (currentView === 'data') return <Data onBack={() => setCurrentView('dashboard')} />;
  if (currentView === 'support') return <Support onBack={() => setCurrentView('dashboard')} />;
  if (currentView === 'earn-more') return <EarnMore onBack={() => setCurrentView('dashboard')} />;
  if (currentView === 'profile') return <Profile onBack={() => setCurrentView('dashboard')} onNavigate={(page) => setCurrentView(page)} />;
  if (currentView === 'profile-info') return <ProfileInfo onBack={() => setCurrentView('profile')} />;
  if (currentView === 'about') return <About onBack={() => setCurrentView('profile')} />;
  if (currentView === 'transaction-history') return <TransactionHistory onBack={() => setCurrentView('dashboard')} />;
  if (currentView === 'refer-earn') return <ReferEarn onBack={() => setCurrentView('dashboard')} onNavigate={(page) => setCurrentView(page)} />;
  if (currentView === 'upgrade') return <Upgrade onBack={() => setCurrentView('dashboard')} />;
  if (currentView === 'join-communities') return <JoinCommunities onBack={() => setCurrentView('dashboard')} />;

  return (
    <div className="min-h-screen bg-[hsl(120,10%,6%)] animate-fade-in">
      {/* Onboarding Popup */}
      {showOnboardingPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-scale-in">
            <Onboarding onComplete={handleCompleteOnboarding} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="p-4 pt-6">
        {/* Header Card */}
        <div className="bg-gradient-to-br from-[hsl(120,8%,12%)] to-[hsl(120,8%,8%)] border border-[hsl(0,0%,15%)] rounded-3xl p-5 mb-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-[hsl(85,80%,55%)] to-[hsl(60,80%,50%)] rounded-full flex items-center justify-center">
                <span className="text-[hsl(120,10%,6%)] font-bold text-lg">{user?.name?.charAt(0)?.toUpperCase() || 'U'}</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-white">Hi, {user?.name?.split(' ')[0] || 'User'} 👋</h1>
                <p className="text-[hsl(0,0%,50%)] text-sm">Welcome back!</p>
              </div>
            </div>
            <button className="w-9 h-9 bg-[hsl(85,80%,55%)] rounded-full flex items-center justify-center">
              <Bell className="w-4 h-4 text-[hsl(120,10%,6%)]" />
            </button>
          </div>

          <div>
            <p className="text-[hsl(0,0%,50%)] text-xs uppercase tracking-wider mb-1">Your Balance</p>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-3xl font-bold text-white">
                {balanceVisible ? `₦${(user?.balance || 180000).toLocaleString()}.00` : '••••••••'}
              </h2>
              <button
                onClick={() => setBalanceVisible(!balanceVisible)}
                className="w-9 h-9 bg-[hsl(0,0%,15%)] rounded-full flex items-center justify-center"
              >
                {balanceVisible ? <EyeOff className="w-4 h-4 text-[hsl(0,0%,50%)]" /> : <Eye className="w-4 h-4 text-[hsl(0,0%,50%)]" />}
              </button>
            </div>
            <p className="text-[hsl(85,80%,55%)] text-xs mb-5">
              Weekly Rewards: ₦{(user?.balance || 180000).toLocaleString()}.00
            </p>

            <div className="flex space-x-3">
              <button
                onClick={() => setCurrentView('upgrade')}
                className="flex-1 bg-[hsl(0,0%,12%)] border border-[hsl(0,0%,18%)] rounded-xl py-3 flex items-center justify-center space-x-2 hover:bg-[hsl(0,0%,15%)] transition-colors"
              >
                <CheckCircle className="w-4 h-4 text-[hsl(85,80%,55%)]" />
                <span className="text-white text-sm font-medium">Upgrade</span>
              </button>
              <button
                onClick={() => setCurrentView('transfer')}
                className="flex-1 bg-gradient-to-r from-[hsl(85,80%,55%)] to-[hsl(60,80%,55%)] rounded-xl py-3 flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
              >
                <ArrowUp className="w-4 h-4 text-[hsl(120,10%,6%)]" />
                <span className="text-[hsl(120,10%,6%)] text-sm font-semibold">Transfer</span>
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <h3 className="text-white font-semibold text-sm mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-4 mb-6">
          {quickActions.map((action, index) => (
            <button key={index} onClick={action.action} className="text-center group">
              <div className={`w-12 h-12 rounded-xl mb-2 mx-auto flex items-center justify-center bg-gradient-to-br ${action.color} group-hover:scale-105 transition-transform`}>
                {React.cloneElement(action.icon, { className: "w-5 h-5 text-white" })}
              </div>
              <p className="text-[hsl(0,0%,55%)] text-[11px] font-medium">{action.label}</p>
            </button>
          ))}
        </div>

        {/* Transaction History Quick Link */}
        <button
          onClick={() => setCurrentView('transaction-history')}
          className="w-full bg-[hsl(120,8%,10%)] border border-[hsl(0,0%,15%)] rounded-xl p-4 mb-6 flex items-center justify-between hover:bg-[hsl(120,8%,12%)] transition-colors"
        >
          <div className="flex items-center gap-3">
            <History className="w-5 h-5 text-[hsl(85,80%,55%)]" />
            <span className="text-white text-sm font-medium">Transaction History</span>
          </div>
          <ArrowUp className="w-4 h-4 text-[hsl(0,0%,40%)] rotate-90" />
        </button>

        {/* Current Promotions */}
        <h3 className="text-white font-semibold text-sm mb-3">Current Promotions</h3>
        <div className="relative rounded-2xl overflow-hidden border border-[hsl(0,0%,15%)]">
          <img 
            src="/lovable-uploads/49822b7a-62ed-4146-a32c-55330b959b0b.png" 
            alt="Transact & Win Promotion"
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(120,10%,6%)] to-transparent flex flex-col justify-end p-4">
            <h2 className="text-white text-xl font-bold mb-1">Transact & Win</h2>
            <div className="w-10 h-0.5 bg-[hsl(85,80%,55%)] mb-2" />
            <p className="text-[hsl(0,0%,65%)] text-xs mb-1">All customers who pay with PayGo in store will stand a chance to win great prizes.</p>
            <p className="text-[hsl(85,80%,55%)] text-xs font-semibold">Easter weekend special</p>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      {showLogoutDialog && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-[hsl(120,8%,10%)] border border-[hsl(0,0%,15%)] rounded-2xl p-6 w-full max-w-sm animate-scale-in">
            <h3 className="text-lg font-bold text-white mb-3">Confirm Logout</h3>
            <p className="text-[hsl(0,0%,55%)] mb-6 text-sm">Are you sure you want to logout?</p>
            <div className="flex space-x-3">
              <button onClick={cancelLogout} className="flex-1 bg-[hsl(0,0%,15%)] text-white py-3 rounded-xl text-sm font-medium hover:bg-[hsl(0,0%,20%)] transition-colors">
                No
              </button>
              <button onClick={confirmLogout} className="flex-1 bg-red-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-red-700 transition-colors">
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Refer & Earn Popup */}
      {showReferPopup && <ReferEarnPopup onClose={hideReferPopup} />}
    </div>
  );
};

export default Dashboard;
