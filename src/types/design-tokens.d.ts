/* 
 * Reality Design Language (RDL) v2.0 - TypeScript Type Definitions
 * Type-safe access to CSS custom properties
 */

/**
 * Color Tokens
 */
export interface ColorTokens {
  // Background colors
  'color-background-primary': string;
  'color-background-secondary': string;
  'color-background-tertiary': string;
  'color-background-elevated': string;
  'color-background-overlay': string;
  
  // Surface colors
  'color-surface-primary': string;
  'color-surface-secondary': string;
  'color-surface-tertiary': string;
  'color-surface-glass': string;
  
  // Text colors
  'color-text-primary': string;
  'color-text-secondary': string;
  'color-text-tertiary': string;
  'color-text-disabled': string;
  'color-text-inverse': string;
  
  // Border colors
  'color-border-primary': string;
  'color-border-secondary': string;
  'color-border-tertiary': string;
  
  // Accent colors
  'color-accent-ember': string;
  'color-accent-glacier': string;
  'color-accent-jade': string;
  'color-accent-amethyst': string;
  'color-accent-amber': string;
  
  // Semantic colors
  'color-success': string;
  'color-warning': string;
  'color-error': string;
  'color-info': string;
}

/**
 * Opacity Tokens
 */
export interface OpacityTokens {
  'opacity-0': string;
  'opacity-5': string;
  'opacity-10': string;
  'opacity-15': string;
  'opacity-20': string;
  'opacity-25': string;
  'opacity-30': string;
  'opacity-40': string;
  'opacity-50': string;
  'opacity-60': string;
  'opacity-70': string;
  'opacity-75': string;
  'opacity-80': string;
  'opacity-90': string;
  'opacity-95': string;
  'opacity-100': string;
  'opacity-disabled': string;
  'opacity-disabled-strong': string;
}

/**
 * Z-Index Tokens
 */
export interface ZIndexTokens {
  'z-background': string;
  'z-content': string;
  'z-dropdown': string;
  'z-sticky': string;
  'z-fixed': string;
  'z-drawer': string;
  'z-backdrop': string;
  'z-modal': string;
  'z-popover': string;
  'z-tooltip': string;
  'z-toast': string;
  'z-loading': string;
  'z-max': string;
}

export interface BlurTokens {
  'blur-none': string;
  'blur-sm': string;
  'blur-md': string;
  'blur-lg': string;
  'blur-xl': string;
  'blur-2xl': string;
}

export interface TypographyTokens {
  'font-family-sans': string;
  'font-family-mono': string;
  'text-xs': string;
  'text-sm': string;
  'text-base': string;
  'text-lg': string;
  'text-xl': string;
  'text-2xl': string;
  'text-3xl': string;
  'text-4xl': string;
  'text-5xl': string;
  'font-light': string;
  'font-normal': string;
  'font-medium': string;
  'font-semibold': string;
  'font-bold': string;
  'font-extrabold': string;
  'leading-none': string;
  'leading-tight': string;
  'leading-snug': string;
  'leading-normal': string;
  'leading-relaxed': string;
  'leading-loose': string;
  'tracking-tighter': string;
  'tracking-tight': string;
  'tracking-normal': string;
  'tracking-wide': string;
  'tracking-wider': string;
  'tracking-widest': string;
}

export interface SpacingTokens {
  'space-0': string;
  'space-1': string;
  'space-2': string;
  'space-3': string;
  'space-4': string;
  'space-5': string;
  'space-6': string;
  'space-8': string;
  'space-10': string;
  'space-12': string;
  'space-14': string;
  'space-16': string;
  'space-20': string;
  'space-24': string;
  'space-28': string;
  'space-32': string;
  'space-36': string;
  'space-40': string;
  'space-44': string;
  'space-48': string;
  'space-page-margin': string;
  'space-card-gap': string;
  'space-section-gap': string;
}

export interface BorderRadiusTokens {
  'radius-none': string;
  'radius-sm': string;
  'radius-md': string;
  'radius-lg': string;
  'radius-xl': string;
  'radius-2xl': string;
  'radius-3xl': string;
  'radius-full': string;
}

export interface ShadowTokens {
  'shadow-sm': string;
  'shadow-md': string;
  'shadow-lg': string;
  'shadow-xl': string;
  'shadow-2xl': string;
  'shadow-sm-dark': string;
  'shadow-md-dark': string;
  'shadow-lg-dark': string;
  'shadow-xl-dark': string;
  'shadow-2xl-dark': string;
  'shadow-ember': string;
  'shadow-glacier': string;
}

export interface AnimationTokens {
  'duration-instant': string;
  'duration-fast': string;
  'duration-normal': string;
  'duration-slow': string;
  'duration-slower': string;
  'duration-slowest': string;
  'duration-entrance': string;
  'ease-linear': string;
  'ease-in': string;
  'ease-out': string;
  'ease-in-out': string;
  'ease-spring': string;
  'ease-bounce': string;
  'transition-fast': string;
  'transition-normal': string;
  'transition-slow': string;
  'transition-slower': string;
  'transition-spring': string;
}

export interface IconTokens {
  'icon-xs': string;
  'icon-sm': string;
  'icon-md': string;
  'icon-lg': string;
  'icon-xl': string;
  'icon-2xl': string;
  'icon-3xl': string;
  'icon-stroke-sm': string;
  'icon-stroke-md': string;
  'icon-stroke-lg': string;
  'icon-touch-xs': string;
  'icon-touch-sm': string;
  'icon-touch-md': string;
  'icon-touch-lg': string;
  'icon-touch-xl': string;
}

export interface StateTokens {
  'state-active-scale': string;
  'state-loading-color': string;
  'state-empty-color': string;
  'state-error-color': string;
  'state-success-color': string;
  'state-warning-color': string;
  'state-info-color': string;
  'focus-outline': string;
  'focus-outline-offset': string;
}

export interface SafeAreaTokens {
  'safe-area-inset-top': string;
  'safe-area-inset-bottom': string;
  'safe-area-inset-left': string;
  'safe-area-inset-right': string;
}

export interface DesignTokens 
  extends ColorTokens,
    OpacityTokens,
    ZIndexTokens,
    BlurTokens,
    TypographyTokens,
    SpacingTokens,
    BorderRadiusTokens,
    ShadowTokens,
    AnimationTokens,
    IconTokens,
    StateTokens,
    SafeAreaTokens {}

export type CSSVar<T extends string> = `var(--${T})`;
export type ColorVar<T extends keyof ColorTokens> = CSSVar<T>;
export type SpacingVar<T extends keyof SpacingTokens> = CSSVar<T>;

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type Theme = 'light' | 'dark';

export type ContentState = 'loading' | 'empty' | 'error' | 'success' | 'offline';
export type InteractionState = 'default' | 'hover' | 'active' | 'focus' | 'disabled' | 'loading';
export type DataState = 'pristine' | 'dirty' | 'valid' | 'invalid' | 'submitting' | 'submitted';
export type NetworkState = 'idle' | 'loading' | 'success' | 'error' | 'timeout' | 'offline';
export type ViewState = 'full' | 'compact' | 'expanded' | 'collapsed' | 'filtered';
