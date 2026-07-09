import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import './Button.css';
import type { ButtonProps } from '../../types/design-tokens';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      onClick,
      type = 'button',
      children,
      ariaLabel,
      ...props
    },
    ref
  ) => {
    const baseClass = 'btn';
    const variantClass = 'btn-' + variant;
    const sizeClass = 'btn-' + size;
    
    const classNameStr = [
      baseClass,
      variantClass,
      sizeClass,
      loading ? 'btn-loading' : '',
      className || ''
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={classNameStr}
        onClick={onClick}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <Loader2
            className="btn-icon-spinner"
            style={{ width: '16px', height: '16px' }}
            aria-hidden="true"
          />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
