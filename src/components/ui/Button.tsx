import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
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
    const getVariantStyles = () => {
      const base = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-2)',
        fontFamily: 'var(--font-family-sans)',
        fontWeight: 'var(--font-semibold)' as const,
        cursor: 'pointer',
        whiteSpace: 'nowrap' as const,
        transition: 'all var(--transition-normal)',
        border: 'none',
        borderRadius: 'var(--radius-md)',
      };

      switch (variant) {
        case 'primary':
          return {
            ...base,
            backgroundColor: 'var(--color-accent-ember)',
            color: 'var(--color-text-primary)',
            padding: size === 'xs' ? 'var(--space-1-5) var(--space-3)' :
                   size === 'sm' ? 'var(--space-2) var(--space-4)' :
                   size === 'md' ? 'var(--space-3) var(--space-6)' :
                   size === 'lg' ? 'var(--space-4) var(--space-8)' :
                   'var(--space-5) var(--space-10)',
            fontSize: size === 'xs' ? 'var(--text-xs)' :
                     size === 'sm' ? 'var(--text-sm)' :
                     size === 'xl' ? 'var(--text-lg)' : 'var(--text-base)',
            minWidth: size === 'xs' ? '32px' :
                     size === 'sm' ? '40px' :
                     size === 'lg' ? '56px' :
                     size === 'xl' ? '64px' : '48px',
            ':hover': {
              backgroundColor: 'color-mix(in srgb, var(--color-accent-ember), black 10%)',
            },
            ':active': {
              backgroundColor: 'color-mix(in srgb, var(--color-accent-ember), black 20%)',
              transform: 'scale(var(--state-active-scale))',
            },
          };
        case 'secondary':
          return {
            ...base,
            backgroundColor: 'var(--color-surface-secondary)',
            color: 'var(--color-text-secondary)',
            border: '1px solid var(--color-border-primary)',
            padding: size === 'xs' ? 'var(--space-1-5) var(--space-3)' :
                   size === 'sm' ? 'var(--space-2) var(--space-4)' :
                   size === 'md' ? 'var(--space-3) var(--space-6)' :
                   size === 'lg' ? 'var(--space-4) var(--space-8)' :
                   'var(--space-5) var(--space-10)',
            fontSize: size === 'xs' ? 'var(--text-xs)' :
                     size === 'sm' ? 'var(--text-sm)' :
                     size === 'xl' ? 'var(--text-lg)' : 'var(--text-base)',
            minWidth: size === 'xs' ? '32px' :
                     size === 'sm' ? '40px' :
                     size === 'lg' ? '56px' :
                     size === 'xl' ? '64px' : '48px',
          };
        default:
          return base;
      }
    };

    const style = getVariantStyles();

    return (
      <button
        ref={ref}
        type={type}
        style={style}
        className={className}
        onClick={onClick}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        aria-busy={loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
