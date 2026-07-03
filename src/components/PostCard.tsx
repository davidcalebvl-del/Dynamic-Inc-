import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';
import { Avatar } from './ui/Avatar';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import type { Post } from '../types/design-tokens';

interface PostCardProps {
  post: Post;
  onLike?: (postId: string) => void;
  onComment?: (postId: string) => void;
  onShare?: (postId: string) => void;
  onSave?: (postId: string) => void;
  onMore?: (postId: string) => void;
  className?: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onLike,
  onComment,
  onShare,
  onSave,
  onMore,
  className = ''
}) => {
  const handleLike = () => onLike && onLike(post.id);
  const handleComment = () => onComment && onComment(post.id);
  const handleShare = () => onShare && onShare(post.id);
  const handleSave = () => onSave && onSave(post.id);
  const handleMore = () => onMore && onMore(post.id);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
      return diffInMinutes < 1 ? 'Just now' : diffInMinutes + 'm';
    }
    if (diffInHours < 24) {
      return diffInHours + 'h';
    }
    if (diffInHours < 24 * 7) {
      const diffInDays = Math.floor(diffInHours / 24);
      return diffInDays + 'd';
    }
    return date.toLocaleDateString();
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <article 
      className={'post-card ' + className}
      aria-labelledby={'post-' + post.id + '-content'}
    >
      {/* Post Header */}
      <header className="post-card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Avatar 
            src={post.author.avatar} 
            alt={post.author.fullName + ' avatar'}
            size="lg"
            status={post.author.verified ? 'online' : undefined}
          />
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--space-1)',
              fontWeight: 'var(--font-semibold)',
              color: 'var(--color-text-primary)'
            }}>
              <span>{post.author.fullName}</span>
              {post.author.verified && (
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              )}
            </div>
            <div style={{ 
              fontSize: 'var(--text-sm)', 
              color: 'var(--color-text-tertiary)'
            }}>
              @{post.author.username}
            </div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleMore}
          ariaLabel="More options"
        >
          <MoreHorizontal size={20} />
        </Button>
      </header>

      {/* Post Content */}
      <div className="post-card-content">
        <p 
          id={'post-' + post.id + '-content'}
          style={{ 
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--leading-normal)',
            marginBottom: 'var(--space-4)'
          }}
        >
          {post.content}
        </p>

        {/* Post Media */}
        {post.media && post.media.length > 0 && (
          <div className="post-card-media">
            <img 
              src={post.media[0].url}
              alt={post.media[0].altText || 'Post media'}
              loading="lazy"
            />
          </div>
        )}

        {/* Post Stats */}
        <div className="post-card-stats">
          <span>{formatNumber(post.likes)} likes</span>
          <span>{formatNumber(post.comments)} comments</span>
          <span>{formatNumber(post.shares)} shares</span>
          <span style={{ marginLeft: 'auto' }}>
            {formatDate(post.createdAt)}
          </span>
        </div>

        {/* Reality Tags */}
        {post.realityTags && post.realityTags.length > 0 && (
          <div className="post-card-tags">
            {post.realityTags.map((tag) => (
              <Badge 
                key={tag.id}
                variant="primary"
                size="sm"
                style={{ 
                  backgroundColor: tag.color + '20',
                  color: tag.color
                }}
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Post Actions */}
      <footer className="post-card-actions">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleLike}
          ariaLabel={post.isLiked ? 'Unlike post' : 'Like post'}
          className={post.isLiked ? 'active' : ''}
        >
          <Heart 
            size={20} 
            fill={post.isLiked ? 'var(--color-accent-ember)' : 'none'}
            stroke={post.isLiked ? 'var(--color-accent-ember)' : 'currentColor'}
          />
          <span className="count">{formatNumber(post.likes)}</span>
        </Button>

        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleComment}
          ariaLabel="Comment on post"
        >
          <MessageCircle size={20} />
          <span className="count">{formatNumber(post.comments)}</span>
        </Button>

        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleShare}
          ariaLabel="Share post"
        >
          <Share2 size={20} />
          <span className="count">{formatNumber(post.shares)}</span>
        </Button>

        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleSave}
          ariaLabel={post.isSaved ? 'Unsave post' : 'Save post'}
          className={post.isSaved ? 'active' : ''}
        >
          <Bookmark 
            size={20} 
            fill={post.isSaved ? 'var(--color-accent-ember)' : 'none'}
            stroke={post.isSaved ? 'var(--color-accent-ember)' : 'currentColor'}
          />
        </Button>
      </footer>
    </article>
  );
};

export default PostCard;
