import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TopNav } from './components/layout/TopNav';
import { BottomTabBar } from './components/layout/BottomTabBar';
import { OfflineIndicator } from './components/OfflineIndicator';
import { HomeFeed } from './pages/HomeFeed';
import type { Theme } from './types/design-tokens';

// Theme Context
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {}
});

export const useTheme = () => React.useContext(ThemeContext);

// Responsive helper hook
const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBreakpoint('mobile');
      } else if (width < 1024) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    breakpoint,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop'
  };
};

// Main App Component
const AppContent: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile, isTablet } = useResponsive();

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('reality-theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('reality-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div 
        data-theme={theme}
        style={{
          minHeight: '100vh',
          background: 'var(--color-background-primary)',
          color: 'var(--color-text-primary)'
        }}
      >
        {/* Offline Indicator */}
        <OfflineIndicator onRetry={() => window.location.reload()} />
        
        {/* Top Navigation - Hidden on mobile */}
        {!isMobile && (
          <TopNav 
            title="Reality" 
            onSearch={() => handleNavigate('/search')}
            onNotifications={() => handleNavigate('/notifications')}
            onSettings={() => handleNavigate('/settings')}
          />
        )}
        
        {/* Main Content */}
        <main style={{ 
          paddingTop: isMobile ? 'calc(44px + var(--space-4))' : 'calc(88px + var(--space-4))',
          paddingBottom: isMobile ? 'calc(80px + var(--space-6))' : 'var(--space-6)',
          paddingLeft: 'var(--space-4)',
          paddingRight: 'var(--space-4)',
          minHeight: '100vh'
        }}>
          <Routes>
            <Route path="/" element={<HomeFeed />} />
            <Route path="/discover" element={<HomeFeed />} />
            <Route path="/create" element={<div>Create Post</div>} />
            <Route path="/notifications" element={<div>Notifications</div>} />
            <Route path="/profile" element={<div>Profile</div>} />
            <Route path="/search" element={<div>Search</div>} />
            <Route path="/settings" element={<div>Settings</div>} />
          </Routes>
        </main>
        
        {/* Bottom Tab Bar - Mobile only */}
        {isMobile && (
          <BottomTabBar 
            currentPath={location.pathname}
            onNavigate={handleNavigate}
            showFab={true}
          />
        )}
      </div>
    </ThemeContext.Provider>
  );
};

// Main App with Router
const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
