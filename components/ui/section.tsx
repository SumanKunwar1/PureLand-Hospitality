import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent" | "muted";
}

export function Section({
  children,
  className,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        {
          "bg-background text-foreground": variant === "default",
          "bg-primary text-primary-foreground": variant === "primary",
          "bg-secondary text-secondary-foreground": variant === "secondary",
          "bg-accent text-accent-foreground": variant === "accent",
          "bg-muted text-muted-foreground": variant === "muted",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}