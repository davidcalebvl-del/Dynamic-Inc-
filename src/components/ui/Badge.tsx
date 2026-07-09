import React, { forwardRef } from 'react';
import './Badge.css';
import type { BadgeProps } from '../../types/design-tokens';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = 'default',
      size = 'sm',
      dot = false,
      children,
      ...props
    },
    ref
  ) => {
    const variantClass = 'badge-' + variant;
    const sizeClass = 'badge-' + size;
    const classNameStr = [
      'badge',
      variantClass,
      sizeClass,
      dot ? 'badge-dot' : '',
      className || ''
    ].filter(Boolean).join(' ');

    return (
      <span
        ref={ref}
        className={classNameStr}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
