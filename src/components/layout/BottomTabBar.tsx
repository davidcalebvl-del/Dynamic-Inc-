import React from 'react';
import { Home, Search, Plus, Bell, User } from 'lucide-react';
import { Button } from '../ui/Button';
import './BottomTabBar.css';

interface TabItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface BottomTabBarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
  showFab?: boolean;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  currentPath = '/',
  onNavigate,
  showFab = true
}) => {
  const tabs: TabItem[] = [
    { id: 'home', icon: <Home size={24} />, label: 'Home', href: '/' },
    { id: 'search', icon: <Search size={24} />, label: 'Discover', href: '/discover' },
    { id: 'create', icon: <Plus size={24} />, label: 'Create', href: '/create' },
    { id: 'notifications', icon: <Bell size={24} />, label: 'Notifications', href: '/notifications' },
    { id: 'profile', icon: <User size={24} />, label: 'Profile', href: '/profile' }
  ];

  const handleTabClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const handleFabClick = () => {
    if (onNavigate) {
      onNavigate('/create');
    }
  };

  return (
    <nav 
      className={'tab-bar' + (showFab ? ' tab-bar-with-fab' : '')}
      role="navigation"
      aria-label="Main navigation"
    >
      {tabs.map((tab) => {
        if (showFab && tab.id === 'create') {
          return (
            <Button
              key={tab.id}
              variant="floating"
              onClick={handleFabClick}
              ariaLabel={tab.label}
              className="tab-fab"
            >
              {tab.icon}
            </Button>
          );
        }

        const isActive = currentPath === tab.href;
        
        return (
          <button
            key={tab.id}
            className={'tab-item' + (isActive ? ' active' : '')}
            onClick={() => handleTabClick(tab.href)}
            aria-label={tab.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomTabBar;
