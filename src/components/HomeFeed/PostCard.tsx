import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  MoreHorizontal,
  MapPin,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Users2
} from 'lucide-react';

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

const postData: PostData = {
  id: 'post-123',
  author: {
    name: 'Julia Fillory',
    avatarUrl: 'https://i.pravatar.cc/40?u=juliafillory',
  },
  timestamp: '2 hrs ago',
  content: 'Checking out some new stores downtown!',
  location: 'Raleigh, North Carolina',
  mapPlaceholder: {
    title: 'Raleigh, North Carolina',
    details: 'City - United States',
  },
  socialProof: {
      icon: Users2,
      text: 'Bryan Durand and 2 others have been here'
  },
  imageUrl: 'https://via.placeholder.com/600x300.png?text=Map+Placeholder+Image',
  likes: 156,
  comments: 23,
  shares: 12,
};

interface PostCardProps {
  className?: string;
  post?: PostData; // Allow passing post data as prop
}

const PostCard: React.FC<PostCardProps> = ({ className, post = postData }) => {
  const { author, timestamp, content, location, mapPlaceholder, socialProof, imageUrl, likes, comments, shares } = post;

  const postActions = [
    { id: 'like', label: 'Like', icon: ThumbsUp, count: likes },
    { id: 'comment', label: 'Comment', icon: MessageSquare, count: comments },
    { id: 'share', label: 'Share', icon: Share2, count: shares },
  ];

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={author.avatarUrl} alt={author.name} />
            <AvatarFallback>{author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {author.name} 
              {location && <span className="font-normal text-muted-foreground"> is in <span className="font-semibold text-foreground">{location}</span></span>}
            </p>
            <p className="text-xs text-muted-foreground">{timestamp}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent">
          <MoreHorizontal className="h-5 w-5" />
          <span className="sr-only">More options</span>
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-foreground mb-3 whitespace-pre-line">{content}</p>
        {imageUrl && (
          <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-muted mb-3">
            <img src={imageUrl} alt={mapPlaceholder?.title || 'Post image'} className="w-full h-full object-cover" />
            {mapPlaceholder && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-white">
                    <div className="flex items-center mb-1">
                        <MapPin className="h-5 w-5 mr-2 text-white" />
                        <h3 className="font-semibold text-sm">{mapPlaceholder.title}</h3>
                    </div>
                    <p className="text-xs text-gray-300">{mapPlaceholder.details}</p>
                    {socialProof && (
                        <div className="flex items-center text-xs text-gray-300 mt-1">
                            <socialProof.icon className="h-3.5 w-3.5 mr-1.5" />
                            <span>{socialProof.text}</span>
                        </div>
                    )}
                     <Button variant="secondary" size="sm" className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-black">
                        <Bookmark className="h-4 w-4 mr-1.5" /> Save
                    </Button>
                </div>
            )}
          </div>
        )}
      </CardContent>
      <Separator className="bg-border"/>
      <CardFooter className="p-2">
        <div className="flex w-full justify-around">
          {postActions.map((action) => (
            <Button
              key={action.id}
              variant="ghost"
              className="flex-1 text-muted-foreground hover:bg-accent hover:text-primary font-medium"
            >
              <action.icon className="mr-2 h-5 w-5" />
              {action.label} {action.count > 0 && <span className="ml-1 text-xs">({action.count})</span>}
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
