import { useState } from 'react';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import Login from '../components/Login';
import Register from '../components/Register';
import Welcome from '../components/Welcome';
import Dashboard from '../components/Dashboard';
import LandingPage from '../components/LandingPage';

const AppContent = () => {
  const { user, isWelcomeComplete } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  if (!user && !showAuth) {
    return (
      <LandingPage
        onGetStarted={() => { setShowAuth(true); setIsLogin(false); }}
        onSignIn={() => { setShowAuth(true); setIsLogin(true); }}
      />
    );
  }

  if (!user) {
    return isLogin ? (
      <Login onSwitchToRegister={() => setIsLogin(false)} />
    ) : (
      <Register onSwitchToLogin={() => setIsLogin(true)} />
    );
  }

  if (!isWelcomeComplete) {
    return <Welcome />;
  }

  return <Dashboard />;
};

const Index = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <AppContent />
      </div>
    </AuthProvider>
  );
};

export default Index;
