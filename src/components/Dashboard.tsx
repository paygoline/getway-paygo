
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import { useAuth } from '../contexts/AuthContext';
import { useAutoSlide } from '../hooks/useAutoSlide';
import { Bell, Eye, EyeOff, ArrowUp, CheckCircle, CreditCard, BarChart3, Database, Headphones, Globe, DollarSign, User } from 'lucide-react';
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

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    logout();
    setShowLogoutDialog(false);
  };

  const cancelLogout = () => {
    setShowLogoutDialog(false);
  };

  const handleCompleteOnboarding = () => {
    completeOnboarding();
    setShowOnboardingPopup(false);
  };

  const quickActions = [
    { 
      icon: <CreditCard className="w-8 h-8 text-purple-600" />, 
      label: "Buy PAY ID",
      action: () => setCurrentView('buy-pay-id')
    },
    { 
      icon: <div className="w-8 h-8 bg-gray-600 rounded"></div>, 
      label: "Watch",
      action: () => window.open('https://t.me/Paygofficial', '_blank')
    },
    { 
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />, 
      label: "Airtime",
      action: () => setCurrentView('airtime')
    },
    { 
      icon: <Database className="w-8 h-8 text-red-600" />, 
      label: "Data",
      action: () => setCurrentView('data')
    },
    { 
      icon: <Headphones className="w-8 h-8 text-gray-600" />, 
      label: "Support",
      action: () => setCurrentView('support')
    },
    { 
      icon: <Globe className="w-8 h-8 text-blue-500" />, 
      label: "Group",
      action: () => setCurrentView('join-communities')
    },
    { 
      icon: <DollarSign className="w-8 h-8 text-yellow-600" />, 
      label: "Earn More",
      action: () => setCurrentView('earn-more')
    },
    { 
      icon: <User className="w-8 h-8 text-gray-600" />, 
      label: "Profile",
      action: () => setCurrentView('profile')
    }
  ];

  const promotions = [
    {
      title: "Transact & Win",
      subtitle: "Great prizes await",
      description: "All customers who pay with PayGo in store will stand a chance to win great prizes",
      image: "/lovable-uploads/3ce9f1fb-b753-4102-8a22-a51a0cf90c72.png"
    },
    {
      title: "Mobile Money",
      subtitle: "AUGUST 27-28",
      description: "Special promotion for mobile money transactions",
      image: "/lovable-uploads/c33112b4-8b2b-4d2d-97d5-5db6d30d2254.png"
    },
    {
      title: "Winners",
      subtitle: "of K20 airtime",
      names: ["Patience Ng'andwe", "Phiri John"],
      image: "/lovable-uploads/df8c5190-45dd-42bb-a63b-2d0ac0fe8e40.png"
    }
  ];

  if (currentView === 'buy-pay-id') {
    return <BuyPayId />;
  }

  if (currentView === 'transfer') {
    return <Transfer onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'airtime') {
    return <Airtime onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'data') {
    return <Data onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'support') {
    return <Support onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'earn-more') {
    return <EarnMore onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'profile') {
    return <Profile 
      onBack={() => setCurrentView('dashboard')} 
      onNavigate={(page) => setCurrentView(page)}
    />;
  }

  if (currentView === 'profile-info') {
    return <ProfileInfo onBack={() => setCurrentView('profile')} />;
  }

  if (currentView === 'about') {
    return <About onBack={() => setCurrentView('profile')} />;
  }

  if (currentView === 'transaction-history') {
    return <TransactionHistory onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'refer-earn') {
    return <ReferEarn 
      onBack={() => setCurrentView('dashboard')} 
      onNavigate={(page) => setCurrentView(page)}
    />;
  }

  if (currentView === 'upgrade') {
    return <Upgrade onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'join-communities') {
    return <JoinCommunities onBack={() => setCurrentView('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Onboarding Popup */}
      {showOnboardingPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <Onboarding onComplete={handleCompleteOnboarding} />
          </div>
        </div>
      )}

      {/* Status Bar */}
      <div className="bg-purple-600 text-white px-4 py-1 flex justify-between items-center text-sm">
        <span>00:13</span>
        <div className="flex items-center space-x-1">
          <span>◀ WA Business</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-white"></div>
            <div className="w-1 h-3 bg-white"></div>
            <div className="w-1 h-3 bg-white opacity-50"></div>
          </div>
          <span className="text-xs">LTE</span>
          <span className="bg-yellow-400 text-black px-1 rounded text-xs">25%</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Header Card */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-6 text-white mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">U</span>
              </div>
              <div>
                <h1 className="text-xl font-medium">Hi, Usman 👋</h1>
                <p className="text-base opacity-90">Welcome back!</p>
              </div>
            </div>
            <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>
          </div>

          <div>
            <p className="text-base mb-2">Your Balance</p>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl font-bold">₦180,000.00</h2>
              <Button
                onClick={() => setBalanceVisible(!balanceVisible)}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full"
              >
                <EyeOff className="w-6 h-6" />
              </Button>
            </div>
            <p className="text-base mb-8">Weekly Rewards: ₦180,000.00</p>

            <div className="flex space-x-4">
              <Button 
                onClick={() => setCurrentView('upgrade')}
                className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full py-4 flex items-center justify-center space-x-3"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-lg">Upgrade</span>
              </Button>
              <Button 
                onClick={() => setCurrentView('transfer')}
                className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full py-4 flex items-center justify-center space-x-3"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <ArrowUp className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-lg">Transfer</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <div key={index} className="text-center">
              <button 
                onClick={action.action}
                className="w-16 h-16 rounded-2xl mb-3 flex items-center justify-center"
                style={{
                  backgroundColor: index === 0 ? '#9333ea' : // purple for Buy PAY ID
                                  index === 1 ? '#374151' : // gray for Watch
                                  index === 2 ? '#3b82f6' : // blue for Airtime
                                  index === 3 ? '#dc2626' : // red for Data
                                  index === 4 ? '#6b7280' : // gray for Support
                                  index === 5 ? '#06b6d4' : // cyan for Group
                                  index === 6 ? '#eab308' : // yellow for Earn More
                                  '#6b7280' // gray for Profile
                }}
              >
                {React.cloneElement(action.icon, { 
                  className: "w-8 h-8 text-white" 
                })}
              </button>
              <p className="text-sm text-gray-700 font-medium">{action.label}</p>
            </div>
          ))}
        </div>

        {/* Current Promotions */}
        <div>
          <h3 className="text-xl font-bold text-black mb-4">Current Promotions</h3>
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/49822b7a-62ed-4146-a32c-55330b959b0b.png" 
              alt="Transact & Win Promotion"
              className="w-full h-[280px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h2 className="text-white text-3xl font-bold mb-2">Transact & Win</h2>
              <div className="w-16 h-1 bg-orange-400 mb-4"></div>
              <p className="text-white text-base mb-2">Locations: Cheers Gold Crest Mall | Chrismar Hotel | Hot Spot Pub & Grill</p>
              <p className="text-white text-sm mb-4">All customers who pay with PayGo in store will stand a chance to win great prizes.</p>
              <p className="text-orange-400 text-lg font-semibold">Easter weekend special</p>
            </div>
            {/* Navigation arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <ArrowUp className="w-5 h-5 text-white rotate-[-90deg]" />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <ArrowUp className="w-5 h-5 text-white rotate-90" />
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      {showLogoutDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex space-x-3">
              <Button
                onClick={cancelLogout}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg"
              >
                No
              </Button>
              <Button
                onClick={confirmLogout}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
              >
                Yes
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Refer & Earn Popup */}
      {showReferPopup && (
        <ReferEarnPopup onClose={hideReferPopup} />
      )}
    </div>
  );
};

export default Dashboard;
