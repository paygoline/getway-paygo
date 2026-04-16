import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import Login from '../components/Login';
import Register from '../components/Register';
import Welcome from '../components/Welcome';
import Dashboard from '../components/Dashboard';
import LandingPage from '../components/LandingPage';

const PageTransition = ({ children, viewKey }: { children: React.ReactNode; viewKey: string }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const timer = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(timer);
  }, [viewKey]);

  return (
    <div className={`transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
};

const AppContent = () => {
  const { user, isWelcomeComplete } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  // Determine current view key for transitions
  let viewKey = 'landing';
  if (user && isWelcomeComplete) viewKey = 'dashboard';
  else if (user) viewKey = 'welcome';
  else if (showAuth) viewKey = isLogin ? 'login' : 'register';

  if (!user && !showAuth) {
    return (
      <PageTransition viewKey="landing">
        <LandingPage
          onGetStarted={() => { setShowAuth(true); setIsLogin(false); }}
          onSignIn={() => { setShowAuth(true); setIsLogin(true); }}
        />
      </PageTransition>
    );
  }

  if (!user) {
    return (
      <PageTransition viewKey={viewKey}>
        {isLogin ? (
          <Login onSwitchToRegister={() => setIsLogin(false)} />
        ) : (
          <Register onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </PageTransition>
    );
  }

  if (!isWelcomeComplete) {
    return (
      <PageTransition viewKey="welcome">
        <Welcome />
      </PageTransition>
    );
  }

  return (
    <PageTransition viewKey="dashboard">
      <Dashboard />
    </PageTransition>
  );
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
