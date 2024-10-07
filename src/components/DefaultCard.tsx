import React, { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface DefaultCardProps {
  children: ReactNode;
  className?: string;
}

const DefaultCard: React.FC<DefaultCardProps> = ({ children, className }) => {
  return (
    <div className={cn('bg-[#FFFFFF04] rounded-lg p-4 flex flex-col border border-[#FFFFFF29]', className)}>
      {children}
    </div>
  );
};

export default DefaultCard;
