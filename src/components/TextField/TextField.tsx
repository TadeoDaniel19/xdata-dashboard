
"use client";
import { useState, InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function InputField({
  label,
  type = "text",
  className = "",
  placeholder,
  ...rest
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;
    const EyeIcon = HiEye as any;
    const EyeOffIcon = HiEyeOff as any;
  
  return (
    <div className={`w-full mb-4 ${className}`}>
      <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          className={`
            block w-full
            border border-input-border
            text-gray-500
            bg-input-bg
            rounded-xl
            px-4 py-2 pr-${type === "password" ? "12" : "4"}
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500
            transition
          `}
          {...rest}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400"
          >
            {showPassword ? (
              <EyeOffIcon />
            ) : (
              <EyeIcon />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
