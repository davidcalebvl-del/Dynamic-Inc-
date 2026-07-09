import React from 'react';
import './Skeleton.css';

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'card' | 'avatar' | 'line';
  width?: string | number;
  height?: string | number;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  widthClass?: 'w-10' | 'w-20' | 'w-25' | 'w-30' | 'w-40' | 'w-50' | 'w-60' | 'w-70' | 'w-75' | 'w-80' | 'w-90' | 'w-100';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  className = '',
  size,
  widthClass
}) => {
  const variantClass = 'skeleton-' + variant;
  const sizeClass = size ? 'skeleton-' + size : '';
  const widthClassName = widthClass ? 'skeleton-' + widthClass : '';
  
  const style: React.CSSProperties = {};
  if (width) style.width = width;
  if (height) style.height = height;
  
  const classNameStr = [
    'skeleton',
    variantClass,
    sizeClass,
    widthClassName,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classNameStr}
      style={style}
      aria-hidden="true"
    />
  );
};

// Post Card Skeleton Component
interface PostCardSkeletonProps {
  showMedia?: boolean;
  showLongContent?: boolean;
}

export const PostCardSkeleton: React.FC<PostCardSkeletonProps> = ({
  showMedia = true,
  showLongContent = false
}) => {
  return (
    <div className="skeleton-post card" role="status" aria-label="Loading post">
      <div className="skeleton-post-header">
        <Skeleton variant="circular" className="skeleton-post-avatar" />
        <div className="skeleton-post-info">
          <Skeleton width="60%" className="skeleton-post-name" />
          <Skeleton width="40%" className="skeleton-post-username" />
        </div>
      </div>
      <Skeleton 
        variant="text" 
        className={'skeleton-post-content' + (showLongContent ? ' long' : '')}
        width="100%"
      />
      {showMedia && (
        <Skeleton variant="rectangular" className="skeleton-post-media" />
      )}
      <div className="skeleton-post-actions">
        <Skeleton className="skeleton-post-action" />
        <Skeleton className="skeleton-post-action" />
        <Skeleton className="skeleton-post-action" />
      </div>
    </div>
  );
};

// Feed Skeleton Component
interface FeedSkeletonProps {
  count?: number;
}

export const FeedSkeleton: React.FC<FeedSkeletonProps> = ({ count = 3 }) => {
  return (
    <div className="skeleton-feed" role="status" aria-label="Loading feed">
      {Array.from({ length: count }).map((_, index) => (
        <PostCardSkeleton 
          key={index}
          showMedia={index % 2 === 0}
          showLongContent={index % 3 === 0}
        />
      ))}
    </div>
  );
};

export default Skeleton;
