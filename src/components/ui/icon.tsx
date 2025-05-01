
import React from "react";
import { LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  fallback = "CircleAlert", 
  className, 
  ...props 
}) => {
  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] || 
                     LucideIcons[fallback as keyof typeof LucideIcons];

  return <LucideIcon className={cn("", className)} {...props} />;
};

export default Icon;
