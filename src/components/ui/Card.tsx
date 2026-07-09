import React, { forwardRef } from 'react';
import './Card.css';
import type { CardProps } from '../../types/design-tokens';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const variantClass = 'card-' + variant;
    const sizeClass = 'card-' + size;
    const classNameStr = [
      'card',
      variantClass,
      sizeClass,
      onClick ? 'card-interactive' : '',
      className || ''
    ].filter(Boolean).join(' ');

    return (
      <div
        ref={ref}
        className={classNameStr}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
