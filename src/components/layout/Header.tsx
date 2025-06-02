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
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const user = { name: 'Olenna', avatarUrl: 'https://i.pravatar.cc/32?u=OlennaMason' }; 

  const navLinks = [
    { id: 'home' as const, label: 'Home', icon: Home, href: '#', isActive: true },
    { id: 'findfriends' as const, label: 'Find Friends', icon: Users, href: '#' },
  ];

  const iconActions = [
    { id: 'messages' as const, label: 'Messages', icon: MessageCircle, href: '#', badge: 8 },
    { id: 'notifications' as const, label: 'Notifications', icon: Bell, href: '#', badge: 36 },
    { id: 'help' as const, label: 'Help', icon: HelpCircle, href: '#' },
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
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search" className="pl-9 h-9 w-60 md:w-72 bg-background rounded-full" />
        </div>
      </div>

      <nav className="hidden md:flex items-center space-x-1">
        {navLinks.map((link) => (
          <Button
            key={link.id}
            variant={'ghost'} // Use ghost for consistent hover, active state managed by custom classes
            size="sm"
            className={cn(
              'px-6 py-2 h-auto rounded-lg text-sm font-medium',
              link.isActive 
                ? 'text-primary border-b-2 border-primary rounded-none hover:bg-transparent' 
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )}
            asChild
          >
            <a href={link.href} className="flex flex-col items-center justify-center h-[50px]">
              <link.icon className={cn('h-6 w-6', link.isActive ? 'text-primary' : 'text-muted-foreground')} />
              {/* <span className="sr-only">{link.label}</span> Optional: show label on larger screens if design allows */}
            </a>
          </Button>
        ))}
      </nav>

      <div className="flex items-center space-x-1">
        <Button variant="ghost" size="sm" className="text-foreground hover:bg-accent px-2 py-1 rounded-full hidden sm:flex items-center">
          <Avatar className="h-7 w-7 mr-1.5">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          {user.name}
        </Button>
        
        {iconActions.map((action) => (
          <Button key={action.id} variant="ghost" size="icon" className="relative text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-full w-10 h-10">
            <action.icon className="h-5 w-5" />
            {action.badge && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                {action.badge > 9 ? '9+' : action.badge}
              </span>
            )}
            <span className="sr-only">{action.label}</span>
          </Button>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-full w-10 h-10">
              <ChevronDown className="h-5 w-5" />
              <span className="sr-only">User Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>{user.name}'s Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings & Privacy</span>
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

export default Header;
