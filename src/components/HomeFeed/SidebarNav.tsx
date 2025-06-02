import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Newspaper,
  MessageCircle,
  Clapperboard,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  UserCheck, // Using UserCheck for Friend Lists as UserPlus is for adding
  HeartHandshake,
  ChevronDown,
  PlusCircle,
  Settings, // Generic icon for Ad/Page/Group etc. under Create
  ShieldQuestion // Placeholder for generic 'Explore' items if specific are missing
} from 'lucide-react';

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, icon: Icon, isActive, className }) => (
  <a
    href={href}
    className={cn(
      'flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium',
      isActive
        ? 'bg-sidebar-accent text-sidebar-primary-foreground'
        : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      className
    )}
  >
    <Icon className={cn('h-5 w-5', isActive ? 'text-sidebar-primary' : 'text-sidebar-foreground/70')} />
    <span>{label}</span>
  </a>
);

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const user = { name: 'Olenna Mason', avatarUrl: 'https://i.pravatar.cc/40?u=OlennaMason' };

  const mainNavItems = [
    { id: 'newsfeed', label: 'News Feed', icon: Newspaper, href: '#', isActive: true },
    { id: 'messenger', label: 'Messenger', icon: MessageCircle, href: '#' },
    { id: 'watch', label: 'Watch', icon: Clapperboard, href: '#' },
    { id: 'marketplace', label: 'Marketplace', icon: Store, href: '#' },
  ];

  const shortcuts = [
    { id: 'farmville', label: 'FarmVille 2', icon: Gamepad2, href: '#' },
    // Add more shortcuts here if needed
  ];

  const exploreItems = [
    { id: 'events', label: 'Events', icon: CalendarDays, href: '#' },
    { id: 'pages', label: 'Pages', icon: Flag, href: '#' },
    { id: 'groups', label: 'Groups', icon: Users, href: '#' },
    { id: 'friendlists', label: 'Friend Lists', icon: UserCheck, href: '#' },
    { id: 'fundraisers', label: 'Fundraisers', icon: HeartHandshake, href: '#' },
  ];

  const createItems = [
    { id: 'ad', label: 'Ad', icon: Settings, href: '#' }, // Using generic icons
    { id: 'page', label: 'Page', icon: Flag, href: '#' },
    { id: 'group', label: 'Group', icon: Users, href: '#' },
    { id: 'event', label: 'Event', icon: CalendarDays, href: '#' },
    { id: 'fundraiser', label: 'Fundraiser', icon: HeartHandshake, href: '#' },
  ];

  return (
    <aside className={cn('fixed top-0 left-0 h-screen w-60 bg-sidebar text-sidebar-foreground flex flex-col', className)}>
      <div className="p-4 flex items-center space-x-2 border-b border-sidebar-border">
        {/* Placeholder for Facebook logo if it were part of this component */}
        {/* <div className="text-2xl font-bold text-primary">F</div> */}
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-1">
          <NavItem href="#profile" label={user.name} icon={() => <Avatar className="h-6 w-6"><AvatarImage src={user.avatarUrl} /><AvatarFallback>{user.name.charAt(0)}</AvatarFallback></Avatar>} />
        </nav>
        <nav className="p-4 space-y-1">
          {mainNavItems.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}
        </nav>
        <Separator className="my-4 bg-sidebar-border" />
        <div className="px-4 mb-2">
          <h3 className="text-xs font-semibold uppercase text-sidebar-foreground/60 tracking-wider">Shortcuts</h3>
        </div>
        <nav className="p-4 pt-0 space-y-1">
          {shortcuts.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}
        </nav>
        <Separator className="my-4 bg-sidebar-border" />
        <div className="px-4 mb-2">
          <h3 className="text-xs font-semibold uppercase text-sidebar-foreground/60 tracking-wider">Explore</h3>
        </div>
        <nav className="p-4 pt-0 space-y-1">
          {exploreItems.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}
          <Button variant="ghost" className="w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <ChevronDown className="h-5 w-5 mr-3 text-sidebar-foreground/70" />
            See More...
          </Button>
        </nav>
        <Separator className="my-4 bg-sidebar-border" />
        <div className="px-4 mb-2">
          <h3 className="text-xs font-semibold uppercase text-sidebar-foreground/60 tracking-wider">Create</h3>
        </div>
        <nav className="p-4 pt-0 space-y-1">
          {createItems.map((item) => (
             <Button key={item.id} variant="ghost" className="w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              <item.icon className="h-5 w-5 mr-3 text-sidebar-foreground/70" />
              {item.label}
            </Button>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-sidebar-border text-xs text-sidebar-foreground/50">
        Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2024
      </div>
    </aside>
  );
};

export default SidebarNav;
