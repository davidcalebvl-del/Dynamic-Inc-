import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { TopNav } from './components/layout/TopNav';
import { BottomTabBar } from './components/layout/BottomTabBar';
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

// Main App Component
const AppContent: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const navigate = useNavigate();

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
        <TopNav 
          title="Reality" 
          onSearch={() => handleNavigate('/search')}
          onNotifications={() => handleNavigate('/notifications')}
          onSettings={() => handleNavigate('/settings')}
        />
        
        <Routes>
          <Route path="/" element={<HomeFeed />} />
          <Route path="/discover" element={<div>Discover Feed</div>} />
          <Route path="/create" element={<div>Create Post</div>} />
          <Route path="/notifications" element={<div>Notifications</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
          <Route path="/search" element={<div>Search</div>} />
          <Route path="/settings" element={<div>Settings</div>} />
        </Routes>
        
        <BottomTabBar 
          currentPath={window.location.pathname}
          onNavigate={handleNavigate}
          showFab={true}
        />
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
