import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300";

export const btnStyles = {
  solid: cn(
    base,
    "bg-primary text-primary-foreground hover:brightness-110 hover:shadow-[0_10px_40px_-12px_var(--accent)]",
  ),
  outline: cn(
    base,
    "border border-border-strong text-foreground hover:border-accent hover:bg-accent-soft",
  ),
  ghost: cn(
    base,
    "px-0 text-muted-foreground hover:text-foreground underline-offset-8 hover:underline",
  ),
};

export function Btn({
  variant = "solid",
  className,
  ...props
}: ComponentPropsWithoutRef<"a"> & { variant?: keyof typeof btnStyles }) {
  return <a className={cn(btnStyles[variant], className)} {...props} />;
}
