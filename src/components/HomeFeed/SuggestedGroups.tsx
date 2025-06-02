import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Users, Plus, X } from 'lucide-react';

interface GroupSuggestion {
  id: string;
  name: string;
  tagline?: string;
  members: number;
  coverImageUrl: string;
  memberAvatars: string[];
}

const suggestedGroupsData: GroupSuggestion[] = [
  {
    id: 'group-1',
    name: 'Mad Men (MADdicts)',
    members: 6195,
    coverImageUrl: 'https://images.unsplash.com/photo-1604976043520-931cab1417ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkJTIwbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=300&h=100&q=80',
    memberAvatars: [
      'https://i.pravatar.cc/24?u=member1',
      'https://i.pravatar.cc/24?u=member2',
      'https://i.pravatar.cc/24?u=member3',
      'https://i.pravatar.cc/24?u=member4',
    ],
  },
  {
    id: 'group-2',
    name: 'Dexter Morgan',
    members: 6984,
    coverImageUrl: 'https://images.unsplash.com/photo-1590649493849-535899387852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV4dGVyJTIwbW9yZ2FufGVufDB8fDB8fHww&auto=format&fit=crop&w=300&h=100&q=80',
    memberAvatars: [
      'https://i.pravatar.cc/24?u=member5',
      'https://i.pravatar.cc/24?u=member6',
      'https://i.pravatar.cc/24?u=member7',
    ],
  },
  {
    id: 'group-3',
    name: 'Tech Innovators Hub',
    members: 12030,
    coverImageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=300&h=100&q=80',
    memberAvatars: [
      'https://i.pravatar.cc/24?u=member8',
      'https://i.pravatar.cc/24?u=member9',
      'https://i.pravatar.cc/24?u=member10',
      'https://i.pravatar.cc/24?u=member11',
      'https://i.pravatar.cc/24?u=member12',
    ],
  },
];

interface SuggestedGroupsProps {
  className?: string;
}

const SuggestedGroups: React.FC<SuggestedGroupsProps> = ({ className }) => {
  const [groups, setGroups] = React.useState(suggestedGroupsData);

  const handleDismiss = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-3 pt-4 px-4">
        <CardTitle className="text-md font-semibold">Suggested Groups</CardTitle>
        <Button variant="link" size="sm" className="text-primary p-0 h-auto">
          See All
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px]"> {/* Fixed height for scrollability, adjust as needed */}
          <div className="space-y-0">
            {groups.map((group) => (
              <div key={group.id} className="border-b border-border last:border-b-0">
                <div className="relative h-[100px] w-full">
                  <img
                    src={group.coverImageUrl}
                    alt={`${group.name} cover`}
                    className="h-full w-full object-cover"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-1 right-1 h-6 w-6 bg-black/40 text-white hover:bg-black/60 p-1"
                    onClick={() => handleDismiss(group.id)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <div className="p-3">
                  <h4 className="font-semibold text-sm text-foreground truncate">{group.name}</h4>
                  <p className="text-xs text-muted-foreground mb-1.5">
                    {group.members.toLocaleString()} members
                  </p>
                  <div className="flex -space-x-2 overflow-hidden mb-2.5">
                    {group.memberAvatars.slice(0, 5).map((avatarUrl, index) => (
                      <Avatar key={index} className="inline-block h-6 w-6 rounded-full ring-2 ring-card">
                        <AvatarImage src={avatarUrl} />
                        <AvatarFallback>{index}</AvatarFallback>
                      </Avatar>
                    ))}
                    {group.memberAvatars.length > 5 && (
                       <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground ring-2 ring-card">+{group.memberAvatars.length - 5}</div>
                    )}
                  </div>
                  <Button variant="outline" className="w-full text-sm h-8 hover:bg-accent">
                    <Plus className="mr-1.5 h-4 w-4" /> Join
                  </Button>
                </div>
              </div>
            ))}
            {groups.length === 0 && (
                <p className="p-4 text-center text-sm text-muted-foreground">No group suggestions at the moment.</p>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default SuggestedGroups;
