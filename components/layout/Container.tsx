import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps<T extends ElementType = "div"> {
  as?: T;
  className?: string;
  children: ReactNode;
}

type Props<T extends ElementType> = ContainerProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps>;

export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: Props<T>) {
  const Component = as ?? "div";

  return (
    <Component className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)} {...rest}>
      {children}
    </Component>
  );
}
