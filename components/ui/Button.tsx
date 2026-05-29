"use client";

import type { ButtonHTMLAttributes, ReactElement } from "react";
import { cloneElement, isValidElement } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
}

const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70";

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-teal text-white hover:bg-sage shadow-soft",
  secondary: "bg-peach text-white hover:bg-teal/90",
  ghost: "bg-transparent text-teal hover:bg-sand/50"
};

export function Button({
  className,
  variant = "primary",
  asChild,
  children,
  disabled,
  type,
  ...props
}: ButtonProps) {
  const combinedClassName = cn(
    baseStyles,
    VARIANTS[variant],
    disabled && "pointer-events-none opacity-60",
    className
  );

  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      className: cn(children.props.className, combinedClassName),
      "aria-disabled": disabled ? "true" : undefined,
      tabIndex: disabled ? -1 : children.props.tabIndex,
      ...props
    });
  }

  return (
    <button className={combinedClassName} disabled={disabled} type={type ?? "button"} {...props}>
      {children}
    </button>
  );
}
