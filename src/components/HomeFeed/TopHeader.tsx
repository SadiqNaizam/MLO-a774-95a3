import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Search,
  Home,
  Users,
  MessageCircle,
  Bell,
  HelpCircle,
  ChevronDown,
  Settings,
  LogOut,
  Facebook // Facebook Icon for the logo part
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const user = { name: 'Olenna', avatarUrl: 'https://i.pravatar.cc/32?u=OlennaMason' }; // Smaller avatar for header

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home, href: '#', isActive: true },
    { id: 'findfriends', label: 'Find Friends', icon: Users, href: '#' },
  ];

  const iconActions = [
    { id: 'messages', label: 'Messages', icon: MessageCircle, href: '#', badge: 8 },
    { id: 'notifications', label: 'Notifications', icon: Bell, href: '#', badge: 36 },
    { id: 'help', label: 'Help', icon: HelpCircle, href: '#' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-60 right-0 h-[50px] bg-card text-foreground',
        'flex items-center justify-between px-4 border-b border-border z-10',
        className
      )}
    >
      <div className="flex items-center space-x-2">
        {/* The F logo from the image seems to be part of sidebar or a global brand element, not header. */} 
        {/* However, if needed here, an icon could be used: */}
        {/* <Facebook className="h-8 w-8 text-primary" /> */}
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search" className="pl-8 h-9 w-64 bg-background" />
        </div>
      </div>

      <nav className="flex items-center space-x-1">
        {navLinks.map((link) => (
          <Button
            key={link.id}
            variant={link.isActive ? 'secondary' : 'ghost'}
            size="sm"
            className={cn(
              'px-3 py-2 h-full rounded-md',
              link.isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
            )}
            asChild
          >
            <a href={link.href} className="flex items-center space-x-1.5">
              <link.icon className={cn('h-5 w-5', link.isActive ? 'text-primary' : 'text-muted-foreground')} />
              <span>{link.label}</span>
            </a>
          </Button>
        ))}
      </nav>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="text-foreground hover:bg-accent px-2 py-1">
          <Avatar className="h-7 w-7 mr-1.5">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          {user.name}
        </Button>
        
        {iconActions.map((action) => (
          <Button key={action.id} variant="ghost" size="icon" className="relative text-muted-foreground hover:bg-accent hover:text-accent-foreground w-9 h-9">
            <action.icon className="h-5 w-5" />
            {action.badge && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                {action.badge}
              </span>
            )}
            <span className="sr-only">{action.label}</span>
          </Button>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground w-9 h-9">
              <ChevronDown className="h-5 w-5" />
              <span className="sr-only">User Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
