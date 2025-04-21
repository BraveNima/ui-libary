import type React from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    small: "text-sm px-3 py-1.5",
    medium: "text-base px-4 py-2",
    large: "text-lg px-5 py-3",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        "rounded-md font-medium transition-colors duration-200",
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
