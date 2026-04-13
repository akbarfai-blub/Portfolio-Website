import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "sm" | "md";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-bg-btn-primary text-black hover:opacity-90",
  outline: "border border-border text-text-primary hover:bg-bg-surface",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ variant = "primary", size = "md", className, ...props }, ref) => {
  const classes = cn(
    "inline-flex items-center justify-center font-medium rounded-lg transition-opacity cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...rest}
      />
    );
  }

  const {
    variant: _v,
    size: _s,
    href: _href,
    ...buttonProps
  } = props as ButtonAsButton & { variant?: ButtonVariant; size?: ButtonSize };

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={"button" as const}
      className={classes}
      {...(buttonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
});

Button.displayName = "Button";
