import { InputHTMLAttributes } from 'react';
import { Control, FieldError } from 'react-hook-form';
import { InferType } from 'yup';
import { loginSchema } from '@/schemas/loginSchema';
import { IconType } from 'react-icons';

export type FormValues = InferType<typeof loginSchema>;
export type Variant = 'primary' | 'secondary' | 'purple';
export type Size = 'sm' | 'md' | 'lg';

export interface LoginFormProps {
  onSubmit: (data: FormValues) => void;
  isSubmitting: boolean;
}

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface ControlledInputProps {
  name: keyof FormValues;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  control: Control<FormValues>;
  error?: FieldError;
}

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: string;
  variant?: Variant;
  size?: Size;
}
export interface NavItem {
  icon: IconType | any;
  label: string;
  href: string;
}

export interface Metric {
  title: string;
  value: number;
  active?: boolean;
}
export interface Stat {
  label: string;
  value: string;
}
export interface FileRow {
  name: string;
  size: string;
  uploaded: string;
  updated: string;
  by: string;
}

export interface IMetricsProps {
  data: Metric[];
}
export interface IChartProps {
  stats: Stat[];
}
export interface IFilesProps {
  files: FileRow[];
}
export interface IMetricCardProps {
  title: string;
  value: number;
}
export interface IStatsCardProps {
  stat: Stat;
  hasDivider?: boolean;
}

export interface IAvatarProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}
