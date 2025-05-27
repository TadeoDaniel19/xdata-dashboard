"use client";
import { ButtonProps } from "@/types/general";

export function Button({
  label,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition";

  const variantStyles =
    variant === "secondary"
      ? "bg-gray-200 hover:bg-gray-300 text-gray-700 focus:ring-gray-300"
      : "bg-primary-blue hover:bg-blue-700 text-white focus:ring-blue-500";

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
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
      {label}
    </button>
  );
}
