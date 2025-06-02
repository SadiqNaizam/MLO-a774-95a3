import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { PlusCircle, Settings, Archive } from 'lucide-react';

interface Story {
  id: string;
  userName: string;
  avatarUrl: string;
  storyImageUrl: string;
  isOwnStory?: boolean;
}

const storiesData: Story[] = [
  {
    id: 'add-story',
    userName: 'Add to Your Story',
    avatarUrl: '', // Not used for this special card
    storyImageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwYWRkfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&h=150&q=60',
    isOwnStory: true,
  },
  {
    id: 'story-1',
    userName: 'Julia F.',
    avatarUrl: 'https://i.pravatar.cc/32?u=julia',
    storyImageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&h=150&q=60',
  },
  {
    id: 'story-2',
    userName: 'Mark P.',
    avatarUrl: 'https://i.pravatar.cc/32?u=mark',
    storyImageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=100&h=150&q=60',
  },
  {
    id: 'story-3',
    userName: 'Lisa G.',
    avatarUrl: 'https://i.pravatar.cc/32?u=lisa',
    storyImageUrl: 'https://images.unsplash.com/photo-1540496905036-5937c3334723?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=100&h=150&q=60',
  },
  {
    id: 'story-4',
    userName: 'David K.',
    avatarUrl: 'https://i.pravatar.cc/32?u=david',
    storyImageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=100&h=150&q=60',
  },
    {
    id: 'story-5',
    userName: 'Sarah B.',
    avatarUrl: 'https://i.pravatar.cc/32?u=sarah',
    storyImageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bSUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&h=150&q=60',
  },
];

interface StoriesWidgetProps {
  className?: string;
}

const StoriesWidget: React.FC<StoriesWidgetProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
        <CardTitle className="text-lg font-semibold">Stories</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-accent">
            <Archive className="mr-1.5 h-4 w-4" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-accent">
            <Settings className="mr-1.5 h-4 w-4" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-3 p-4">
            {storiesData.map((story) => (
              <div
                key={story.id}
                className="relative w-[100px] h-[150px] rounded-lg overflow-hidden shadow-md cursor-pointer group shrink-0"
              >
                <img
                  src={story.storyImageUrl}
                  alt={story.userName}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {story.isOwnStory ? (
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end p-2 h-2/5 bg-card">
                     <Button variant="outline" size="icon" className="bg-primary text-primary-foreground rounded-full border-2 border-card -mt-5 z-10 hover:bg-primary/90">
                       <PlusCircle className="h-5 w-5" />
                     </Button>
                    <p className="text-xs font-medium text-center text-foreground mt-1.5 leading-tight">{story.userName}</p>
                  </div>
                ) : (
                  <>
                    <Avatar className="absolute top-2 left-2 h-8 w-8 border-2 border-primary">
                      <AvatarImage src={story.avatarUrl} alt={story.userName} />
                      <AvatarFallback>{story.userName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white truncate">
                      {story.userName}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default StoriesWidget;
