import React, { forwardRef } from 'react';
import './Avatar.css';
import type { AvatarProps } from '../../types/design-tokens';

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      src,
      alt = 'User avatar',
      size = 'md',
      status,
      fallback,
      ...props
    },
    ref
  ) => {
    const sizeClass = 'avatar-' + size;
    const hasStatus = !!status;
    
    return (
      <div
        ref={ref}
        className={'avatar' + (hasStatus ? ' avatar-status' : '') + (className ? ' ' + className : '')}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className={sizeClass}
            loading="lazy"
          />
        ) : (
          <div className={'avatar-fallback ' + sizeClass}>
            {fallback || alt.charAt(0).toUpperCase()}
          </div>
        )}
        {status && (
          <span 
            className={'status-badge status-badge-' + status}
            aria-label={status}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
