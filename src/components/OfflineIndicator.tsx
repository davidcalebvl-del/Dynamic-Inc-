import React, { useState, useEffect } from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button';

interface OfflineIndicatorProps {
  onRetry?: () => void;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ onRetry }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) {
    return null;
  }

  return (
    <div 
      role="alert" 
      aria-live="polite"
      style={{
        position: 'fixed',
        top: '44px',
        left: '0',
        right: '0',
        height: '44px',
        background: 'var(--color-warning)',
        color: 'var(--color-text-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-2)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-medium)',
        zIndex: 'var(--z-fixed)',
        padding: '0 var(--space-4)'
      }}
    >
      <WifiOff size={18} aria-hidden="true" />
      <span>No internet connection</span>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onRetry || (() => window.location.reload())}
        aria-label="Retry connection"
      >
        <RefreshCw size={16} />
      </Button>
    </div>
  );
};

export default OfflineIndicator;
