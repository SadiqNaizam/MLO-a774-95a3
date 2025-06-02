import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import {
  Edit,
  Image as ImageIcon, // Renamed to avoid conflict with JSX Image tag
  Video,
  List,
  UserPlus,
  Ellipsis,
  SendHorizonal
} from 'lucide-react';

interface PostComposerProps {
  className?: string;
}

const PostComposer: React.FC<PostComposerProps> = ({ className }) => {
  const user = { name: 'Olenna', avatarUrl: 'https://i.pravatar.cc/40?u=OlennaMason' };
  const [postText, setPostText] = React.useState<string>('');

  // For this example, we'll show the expanded composer directly
  // A more complex implementation might handle switching between compact and expanded views

  const composerActions = [
    { id: 'makePost', label: 'Make Post', icon: Edit, variant: 'ghost' as const, className: 'text-primary' },
    { id: 'photoVideoAlbum', label: 'Photo/Video Album', icon: ImageIcon, variant: 'ghost' as const },
    { id: 'liveVideo', label: 'Live Video', icon: Video, variant: 'ghost' as const },
  ];

  const attachmentActions = [
    { id: 'list', label: 'List', icon: List, className: 'text-blue-500' },
    { id: 'photoVideo', label: 'Photo/Video', icon: ImageIcon, className: 'text-green-500' },
    { id: 'tagFriends', label: 'Tag Friends', icon: UserPlus, className: 'text-sky-500' },
  ];

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="p-0 border-b border-border">
        <div className="flex items-center justify-around">
          {composerActions.map((action) => (
            <Button
              key={action.id}
              variant={action.variant}
              className={cn('flex-1 py-3 rounded-none text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground', action.className)}
            >
              <action.icon className="mr-2 h-5 w-5" />
              {action.label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="mt-1">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder={`What's on your mind, ${user.name}?`}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="min-h-[80px] flex-1 resize-none border-none focus-visible:ring-0 shadow-none p-0 text-base"
          />
        </div>
      </CardContent>
      <Separator className="bg-border"/>
      <CardFooter className="p-2 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          {attachmentActions.map((action) => (
            <Button key={action.id} variant="ghost" size="sm" className={cn('text-muted-foreground hover:bg-accent', action.className)}>
              <action.icon className="mr-1.5 h-5 w-5" />
              {action.label}
            </Button>
          ))}
        </div>
        <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent">
                <Ellipsis className="h-5 w-5" />
            </Button>
            <Button size="sm" disabled={!postText.trim()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Post <SendHorizonal className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostComposer;
