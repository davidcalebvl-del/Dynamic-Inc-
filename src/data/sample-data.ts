import type { User, RealityTag, Post } from '../types/design-tokens';

export const sampleUsers: User[] = [
  {
    id: 'user-1',
    username: 'davidcaleb',
    fullName: 'David Caleb',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    verified: true,
    bio: 'Building the future of social networking',
    joinedAt: '2024-01-15T10:30:00Z'
  }
];

export const sampleRealityTags: RealityTag[] = [
  {
    id: 'tag-1',
    name: 'Friends',
    color: '#FB7185',
    description: 'Posts from your close friends'
  }
];

export const samplePosts: Post[] = [
  {
    id: 'post-1',
    content: 'Just launched the new Reality app design system!',
    author: sampleUsers[0],
    createdAt: '2024-07-03T10:15:00Z',
    updatedAt: '2024-07-03T10:15:00Z',
    likes: 142,
    comments: 47,
    shares: 12,
    isLiked: false,
    isSaved: true,
    realityTags: [sampleRealityTags[0]],
    privacy: 'public'
  }
];