import React, { forwardRef, useState } from 'react';
import { Eye, EyeOff, Search } from 'lucide-react';
import './Input.css';

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'search';
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  success?: boolean;
  label?: string;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  className?: string;
  id?: string;
  name?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value = '',
      onChange,
      placeholder,
      type = 'text',
      disabled = false,
      readOnly = false,
      error = false,
      success = false,
      label,
      required = false,
      helperText,
      errorMessage,
      icon,
      iconPosition = 'start',
      className = '',
      id,
      name,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const isSearch = type === 'search';
    const hasIcon = !!icon || isPassword || isSearch;
    const inputType = isPassword && showPassword ? 'text' : type;
    
    const containerClasses = [
      hasIcon ? 'form-input-icon form-input-icon-' + iconPosition : '',
      error ? 'error' : '',
      success ? 'success' : '',
      className
    ].filter(Boolean).join(' ');

    const sizeClass = 'form-input-md';
    
    return (
      <div className={containerClasses}>
        {label && (
          <label 
            htmlFor={id}
            className={'form-label' + (required ? ' form-label-required' : '')}
          >
            {label}
          </label>
        )}
        <div style={{ position: 'relative' }}>
          {isSearch && (
            <Search 
              className="search-icon"
              size={20}
              aria-hidden="true"
            />
          )}
          {icon && iconPosition === 'start' && (
            <span className="form-icon" aria-hidden="true">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            name={name}
            type={inputType}
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            className={'form-input ' + sizeClass}
            aria-invalid={error}
            aria-describedby={
              (helperText ? id + '-helper' : '') + 
              (errorMessage ? ' ' + id + '-error' : '')
            }
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              className="form-icon"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
          {icon && iconPosition === 'end' && !isPassword && (
            <span className="form-icon" aria-hidden="true" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}>
              {icon}
            </span>
          )}
        </div>
        {helperText && !errorMessage && (
          <p id={id + '-helper'} className="form-helper">
            {helperText}
          </p>
        )}
        {errorMessage && (
          <p id={id + '-error'} className="form-error" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
