import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string; 
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className, title }) => {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <Header />
      <Sidebar />
      <main className="ml-60 mt-[50px] min-w-0">
        <div className="p-4 h-[calc(100vh-50px)] overflow-y-auto">
          <div className="flex flex-col gap-4">
             {title && <h1 className="text-2xl font-bold text-primary-text mb-2">{title}</h1>}
             {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
