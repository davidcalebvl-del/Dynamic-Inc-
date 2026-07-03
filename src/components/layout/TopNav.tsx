import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import './TopNav.css';

interface TopNavProps {
  title?: string;
  showSearch?: boolean;
  onSearch?: () => void;
  onNotifications?: () => void;
  onSettings?: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  title = 'Reality',
  showSearch = true,
  onSearch,
  onNotifications,
  onSettings
}) => {
  return (
    <header className="nav-bar" role="banner">
      <div className="nav-logo">
        <svg 
          className="nav-logo-icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
        <span>{title}</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        {showSearch && (
          <button 
            className="nav-bar-action" 
            onClick={onSearch}
            aria-label="Search"
          >
            <Search className="icon" />
          </button>
        )}
        <button 
          className="nav-bar-action" 
          onClick={onNotifications}
          aria-label="Notifications"
        >
          <Bell className="icon" />
        </button>
        <button 
          className="nav-bar-action" 
          onClick={onSettings}
          aria-label="Settings"
        >
          <Settings className="icon" />
        </button>
      </div>
    </header>
  );
};

export default TopNav;
