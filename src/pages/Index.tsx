import React from 'react';
import { Users2, Plane } from 'lucide-react';

// Layout Component
import MainAppLayout from '@/components/layout/MainAppLayout';

// Organism Components for Home Feed
import StoriesWidget from '@/components/HomeFeed/StoriesWidget';
import PostComposer from '@/components/HomeFeed/PostComposer';
import PostCard from '@/components/HomeFeed/PostCard';
import SuggestedGroups from '@/components/HomeFeed/SuggestedGroups';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button'; // Example for placeholder widget, not used currently

// Define PostData interface locally as it's not exported by PostCard.tsx
// This interface should mirror the one expected by the PostCard component.
interface PostAuthor {
  name: string;
  avatarUrl: string;
}

interface PostData {
  id: string;
  author: PostAuthor;
  timestamp: string;
  content: string;
  location?: string;
  mapPlaceholder?: {
    title: string;
    details: string;
  };
  socialProof?: {
    icon: React.ElementType;
    text: string;
  };
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
}

const HomeFeedPage: React.FC = () => {
  const posts: PostData[] = [
    {
      id: 'post-1-wonderland-chimborazo',
      author: {
        name: 'Alice Wonderland',
        avatarUrl: 'https://i.pravatar.cc/40?u=alice',
      },
      timestamp: '15 mins ago',
      content: 'Just enjoyed a wonderful hike up Mount Chimborazo! The views were breathtaking. 🏔️ #adventure #ecuador',
      location: 'Mount Chimborazo',
      mapPlaceholder: {
        title: 'Mount Chimborazo, Ecuador',
        details: 'Volcano - Andes Mountains',
      },
      socialProof: {
        icon: Users2,
        text: 'Bob The Explorer and 3 others were here',
      },
      imageUrl: 'https://images.unsplash.com/photo-1589834047277-09903098139c?ixlib=rb-4.0.3&w=600&h=300&q=80&fit=crop&crop=entropy',
      likes: 253,
      comments: 42,
      shares: 18,
    },
    {
      id: 'post-2-charlie-pasta',
      author: {
        name: 'Charlie Cook',
        avatarUrl: 'https://i.pravatar.cc/40?u=charlie',
      },
      timestamp: '1 hr ago',
      content: 'Tried out this new Italian place downtown. The pasta was to die for! 🍝 Highly recommend the carbonara. #foodie #italianfood',
      location: 'Little Italy Cafe',
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&w=600&h=400&q=80&fit=crop&crop=entropy',
      likes: 180,
      comments: 67,
      shares: 5,
    },
    {
      id: 'post-3-diana-kyoto',
      author: {
        name: 'Diana Traveler',
        avatarUrl: 'https://i.pravatar.cc/40?u=diana',
      },
      timestamp: '3 hrs ago',
      content: 'Exploring the beautiful streets of Kyoto. So much history and culture in one place! Next stop: Kinkaku-ji Temple. 🌸🇯🇵 #travel #japan #kyoto',
      location: 'Kyoto, Japan',
      mapPlaceholder: {
        title: 'Gion District, Kyoto',
        details: 'Historic Geisha District - Japan',
      },
      socialProof: {
        icon: Plane,
        text: 'Eva Green and 1 other recently visited',
      },
      imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&w=600&h=300&q=80&fit=crop&crop=entropy',
      likes: 312,
      comments: 55,
      shares: 22,
    },
    {
      id: 'post-4-bob-sapiens',
      author: {
        name: 'Bob The Thinker',
        avatarUrl: 'https://i.pravatar.cc/40?u=bobthinker',
      },
      timestamp: '5 hrs ago',
      content: 'Just finished reading "Sapiens: A Brief History of Humankind" by Yuval Noah Harari. Absolutely fascinating and thought-provoking. It fundamentally changed how I view our species and our history.\n\nWhat are your all-time favorite non-fiction reads that made a similar impact? Share your recommendations! #books #reading #history #nonfiction #mustread',
      likes: 95,
      comments: 30,
      shares: 7,
    },
  ];

  return (
    <MainAppLayout title="Home Feed">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_300px] lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px] gap-6 items-start">
        {/* Main Feed Column (Left) */}
        <section aria-label="Main feed" className="flex flex-col gap-6 min-w-0">
          <StoriesWidget />
          <PostComposer />
          {posts.length > 0 ? (
            posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-center">No Posts Yet!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  It's quiet here... Why not share what's on your mind or check back later for updates?
                </p>
              </CardContent>
            </Card>
          )}
        </section>
        
        {/* Right Widgets Column */}
        <aside className="hidden md:flex flex-col gap-6 sticky top-0 h-[calc(100vh-50px-2rem)] overflow-y-auto pb-4">
          {/* sticky top-0 makes it stick to the top of its grid cell, which is within the MainAppLayout's p-4 scrollable area */}
          {/* Height calculation: 100vh - header height (50px) - top/bottom padding of MainAppLayout's scrollable area (1rem * 2 = 2rem) */}
          {/* pb-4 to ensure content at bottom of scroll doesn't touch edge */}
          <SuggestedGroups />
          {/* 
            Example of another widget that could be here:
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-base">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">No upcoming events scheduled.</p>
                <Button variant="outline" size="sm" className="mt-3 w-full">Create Event</Button>
              </CardContent>
            </Card>
          */}
        </aside>
      </div>
    </MainAppLayout>
  );
};

export default HomeFeedPage;
