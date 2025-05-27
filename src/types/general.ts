import { InputHTMLAttributes } from "react";
import { Control, FieldError } from 'react-hook-form';
import { InferType } from "yup";
import { loginSchema } from "@/schemas/loginSchema";

export type FormValues = InferType<typeof loginSchema>;
export type Variant = "primary" | "secondary";
export type Size = "sm" | "md" | "lg";

export interface LoginFormProps {
  onSubmit: (data: FormValues) => void;
  isSubmitting: boolean;
};

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
};

export interface ControlledInputProps {
  name: keyof FormValues;
  label: string;
  type: "text" | "email" | "password";
  placeholder?: string;
  control: Control<FormValues>;
  error?: FieldError;
}

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label: string;
  variant?: Variant;
  size?: Size;
}

