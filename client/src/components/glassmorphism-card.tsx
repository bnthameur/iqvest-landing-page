import { cn } from "@/lib/utils";

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function GlassmorphismCard({
  children,
  className,
  style,
}: GlassmorphismCardProps) {
  return (
    <div
      className={cn("glass-card rounded-2xl", className)}
      style={style}
    >
      {children}
    </div>
  );
}
