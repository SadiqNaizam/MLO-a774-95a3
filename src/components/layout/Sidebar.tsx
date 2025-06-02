import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Facebook,
  Newspaper,
  MessageCircle,
  Clapperboard,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  UserCheck,
  HeartHandshake,
  ChevronDown,
  Settings as SettingsIcon, // Renamed to avoid conflict with Settings component if any
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

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const user = { name: 'Olenna Mason', avatarUrl: 'https://i.pravatar.cc/40?u=OlennaMason' };

  const mainNavItems = [
    { id: 'newsfeed', label: 'News Feed', icon: Newspaper, href: '#', isActive: true },
    { id: 'messenger', label: 'Messenger', icon: MessageCircle, href: '#' },
    { id: 'watch', label: 'Watch', icon: Clapperboard, href: '#' },
    { id: 'marketplace', label: 'Marketplace', icon: Store, href: '#' },
  ];

  const shortcuts = [
    { id: 'farmville', label: 'FarmVille 2', icon: Gamepad2, href: '#' },
  ];

  const exploreItems = [
    { id: 'events', label: 'Events', icon: CalendarDays, href: '#' },
    { id: 'pages', label: 'Pages', icon: Flag, href: '#' },
    { id: 'groups', label: 'Groups', icon: Users, href: '#' },
    { id: 'friendlists', label: 'Friend Lists', icon: UserCheck, href: '#' },
    { id: 'fundraisers', label: 'Fundraisers', icon: HeartHandshake, href: '#' },
  ];

  const createItems = [
    { id: 'ad', label: 'Ad', icon: SettingsIcon, href: '#' },
    { id: 'page', label: 'Page', icon: Flag, href: '#' },
    { id: 'group', label: 'Group', icon: Users, href: '#' },
    { id: 'event', label: 'Event', icon: CalendarDays, href: '#' },
    { id: 'fundraiser', label: 'Fundraiser', icon: HeartHandshake, href: '#' },
  ];

  return (
    <aside className={cn('fixed top-0 left-0 h-screen w-60 bg-sidebar text-sidebar-foreground flex flex-col z-20', className)}>
      <div className="p-4 flex items-center space-x-3 border-b border-sidebar-border h-[50px] shrink-0">
        <Facebook className="h-8 w-8 text-primary" />
        {/* Optional: Add app name if needed: <span className="font-bold text-lg text-primary-text">AppName</span> */}
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-1">
          <NavItem href="#profile" label={user.name} icon={() => <Avatar className="h-6 w-6"><AvatarImage src={user.avatarUrl} alt={user.name} /><AvatarFallback>{user.name.charAt(0)}</AvatarFallback></Avatar>} />
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
        <nav className="px-4 pt-0 space-y-1">
          {shortcuts.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}
        </nav>
        <Separator className="my-4 bg-sidebar-border" />
        <div className="px-4 mb-2">
          <h3 className="text-xs font-semibold uppercase text-sidebar-foreground/60 tracking-wider">Explore</h3>
        </div>
        <nav className="px-4 pt-0 space-y-1">
          {exploreItems.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}
          <Button variant="ghost" className="w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2">
            <ChevronDown className="h-5 w-5 mr-3 text-sidebar-foreground/70" />
            <span className="text-sm font-medium">See More...</span>
          </Button>
        </nav>
        <Separator className="my-4 bg-sidebar-border" />
        <div className="px-4 mb-2">
          <h3 className="text-xs font-semibold uppercase text-sidebar-foreground/60 tracking-wider">Create</h3>
        </div>
        <nav className="px-4 pt-0 space-y-1">
          {createItems.map((item) => (
             <Button key={item.id} variant="ghost" className="w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-3 py-2">
              <item.icon className="h-5 w-5 mr-3 text-sidebar-foreground/70" />
              <span className="text-sm font-medium">{item.label}</span>
            </Button>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-sidebar-border text-xs text-sidebar-foreground/50 shrink-0">
        Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © {new Date().getFullYear()}
      </div>
    </aside>
  );
};

export default Sidebar;
