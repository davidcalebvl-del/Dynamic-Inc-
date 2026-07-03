import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, AlertCircle, WifiOff, CheckCircle, Plus } from 'lucide-react';
import { PostCard } from '../components/PostCard';
import { Skeleton, FeedSkeleton } from '../components/ui/Skeleton';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { samplePosts } from '../data/sample-data';
import type { Post, FeedState, ContentState } from '../types/design-tokens';

interface HomeFeedProps {
  initialPosts?: Post[];
  initialState?: FeedState;
}

export const HomeFeed: React.FC<HomeFeedProps> = ({
  initialPosts,
  initialState
}) => {
  const [state, setState] = useState<FeedState>({
    status: 'loading',
    posts: initialPosts || [],
    hasMore: true,
    isRefreshing: false
  });

  // Simulate fetching posts
  const fetchPosts = useCallback(async (refresh = false) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate different states for demo purposes
    const demoStates: ContentState[] = ['loading', 'success', 'empty', 'error', 'offline'];
    const randomState = demoStates[Math.floor(Math.random() * demoStates.length)];

    if (refresh) {
      setState(prev => ({ ...prev, isRefreshing: true }));
    }

    switch (randomState) {
      case 'loading':
        setState({ status: 'loading', posts: [], hasMore: true, isRefreshing: false });
        break;
      case 'empty':
        setState({ status: 'empty', posts: [], hasMore: false, isRefreshing: false });
        break;
      case 'error':
        setState({
          status: 'error', 
          posts: [], 
          error: 'Failed to load posts. Please try again.',
          hasMore: false, 
          isRefreshing: false 
        });
        break;
      case 'offline':
        setState({
          status: 'offline', 
          posts: refresh ? [] : state.posts,
          error: 'No internet connection',
          hasMore: false, 
          isRefreshing: false 
        });
        break;
      default:
        // Success - load sample posts
        const newPosts = refresh ? samplePosts : [...state.posts, ...samplePosts];
        setState({
          status: 'success',
          posts: newPosts,
          hasMore: newPosts.length < 20,
          isRefreshing: false
        });
    }
  }, [state.posts]);

  // Initial load
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Handle refresh
  const handleRefresh = () => {
    fetchPosts(true);
  };

  // Handle load more
  const handleLoadMore = () => {
    if (state.hasMore && state.status === 'success') {
      setState(prev => ({ ...prev, status: 'loading' }));
      fetchPosts();
    }
  };

  // Handle like
  const handleLike = useCallback((postId: string) => {
    setState(prev => ({
      ...prev,
      posts: prev.posts.map(post =>
        post.id === postId ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 } : post
      )
    }));
  }, []);

  // Handle save
  const handleSave = useCallback((postId: string) => {
    setState(prev => ({
      ...prev,
      posts: prev.posts.map(post =>
        post.id === postId ? { ...post, isSaved: !post.isSaved } : post
      )
    }));
  }, []);

  // Render different states
  const renderContent = () => {
    switch (state.status) {
      case 'loading':
        return (
          <div role="status" aria-live="polite">
            <FeedSkeleton count={3} />
          </div>
        );

      case 'empty':
        return (
          <EmptyState
            icon={<AlertCircle size={64} />}
            title="No posts yet"
            description="Start by creating your first post or follow friends to see their content."
            action={
              <Button variant="primary" size="md">
                <Plus size={18} /> Create Post
              </Button>
            }
          />
        );

      case 'error':
        return (
          <EmptyState
            icon={<AlertCircle size={64} />}
            title="Something went wrong"
            description={state.error || 'Failed to load posts. Please try again.'}
            action={
              <Button variant="secondary" onClick={handleRefresh}>
                <RefreshCw size={18} /> Try Again
              </Button>
            }
          />
        );

      case 'offline':
        return (
          <EmptyState
            icon={<WifiOff size={64} />}
            title="You're offline"
            description="Check your internet connection and try again."
            action={
              <Button variant="secondary" onClick={handleRefresh}>
                <RefreshCw size={18} /> Try Again
              </Button>
            }
          />
        );

      case 'success':
      default:
        if (state.posts.length === 0) {
          return (
            <EmptyState
              icon={<CheckCircle size={64} />}
              title="All caught up"
              description="You've seen all the latest posts."
            />
          );
        }

        return (
          <>
            {/* Feed Posts */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-6)'
            }}>
              {state.posts.map((post, index) => (
                <PostCard
                  key={post.id + index}
                  post={post}
                  onLike={handleLike}
                  onSave={handleSave}
                />
              ))}
            </div>

            {/* Load More */}
            {state.hasMore && (
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center',
                padding: 'var(--space-8)'
              }}>
                <Button 
                  variant="secondary" 
                  onClick={handleLoadMore}
                  loading={state.isRefreshing}
                >
                  Load More
                </Button>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <main 
      style={{
        paddingTop: 'calc(44px + var(--space-4))',
        paddingBottom: 'calc(80px + var(--space-6))',
        paddingLeft: 'var(--space-4)',
        paddingRight: 'var(--space-4)',
        minHeight: '100vh'
      }}
    >
      {/* Search Bar */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Input
          type="search"
          placeholder="Search Reality..."
          icon={<RefreshCw size={20} />}
          iconPosition="end"
        />
      </div>

      {/* Feed Content */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: 'var(--space-6)'
      }}>
        {renderContent()}
      </div>

      {/* Pull to Refresh indicator */}
      {state.isRefreshing && (
        <div 
          style={{
            position: 'fixed',
            top: '44px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: 'var(--space-2)',
            background: 'var(--color-surface-primary)',
            borderRadius: 'var(--radius-full)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 'var(--z-toast)'
          }}
          role="status"
          aria-live="polite"
        >
          <RefreshCw 
            size={18} 
            className="animate-spin"
            aria-hidden="true"
          />
        </div>
      )}
    </main>
  );
};

// Empty State Component
interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, action }) => {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-16)',
        textAlign: 'center'
      }}
      role="status"
    >
      <div 
        style={{
          color: 'var(--color-text-tertiary)',
          marginBottom: 'var(--space-6)'
        }}
      >
        {icon}
      </div>
      <h2 
        style={{
          fontSize: 'var(--text-xl)',
          fontWeight: 'var(--font-semibold)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--space-2)'
        }}
      >
        {title}
      </h2>
      <p 
        style={{
          fontSize: 'var(--text-base)',
          color: 'var(--color-text-secondary)',
          maxWidth: '280px',
          marginBottom: 'var(--space-8)',
          lineHeight: 'var(--leading-normal)'
        }}
      >
        {description}
      </p>
      {action && (
        <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
          {action}
        </div>
      )}
    </div>
  );
};

export default HomeFeed;
