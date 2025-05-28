"use client";
import { Size, Variant } from "@/types/general";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
}

export function Button({
  label,
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition";

  const variantStyles = {
    primary:   "bg-primary-blue hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-gray-50 hover:bg-gray-200 text-gray-700 focus:ring-gray-300 border border-gray-200",
    purple:    "bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500",
  }[variant];

  const sizeStyles = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }[size];

  return (
    <button
      type={props.type ?? "button"}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
      {label}
    </button>
  );
}
