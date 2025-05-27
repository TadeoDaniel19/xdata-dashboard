"use client";
import { Controller } from "react-hook-form";
import { ControlledInputProps } from "@/types/general";
import { TextField } from '../TextField/TextField';

export function RenderTextfield({
  name,
  label,
  type,
  placeholder,
  control,
  error,
}: ControlledInputProps) {
  return (
    <div className="w-full">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            label={label}
            type={type}
            placeholder={placeholder}
            {...field}
          />
        )}
      />
      {error && (
        <p className="text-xs text-red-600 mt-1">{error.message}</p>
      )}
    </div>
  );
}
