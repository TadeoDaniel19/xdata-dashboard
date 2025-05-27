"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from '../Button/Button';
import { RenderTextfield } from '../RenderTextField/RenderTextfield';
import Image from "next/image";
import { loginSchema } from "@/schemas/loginSchema";
import { FormValues, LoginFormProps } from "@/types/general";

export default function LoginForm({
  onSubmit,
  isSubmitting,
}: LoginFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <div className="flex justify-center">
        <Image
          src="/logo.svg"
          alt="Dashboard Kit"
          width={48}
          height={48}
        />
      </div>
      <div className="text-center space-y-1">
        <p className="text-base text-primary-gray font-bold">Dashboard Kit</p>
        <h1 className="text-xl font-semibold text-gray-900">
          Log In to Dashboard Kit
        </h1>
        <p className="text-sm text-primary-gray">
          Enter your email and password below
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-4"
      >
          <RenderTextfield type='email' control={control} error={errors?.email} name='email' placeholder='Email address' label='email' />
        <div className="relative">
          <RenderTextfield type='password' control={control} error={errors?.password} name='password' placeholder='Password' label='password' />
          <a
            href="#"
            className="absolute top-0 right-0 text-xs text-gray-500 hover:underline"
          >
            Forgot password?
          </a>
        </div>
        <Button
          label={isSubmitting ? "Logging in…" : "Log In"}
          type="submit"
          className="w-full"
          disabled={isSubmitting}
          size="lg"
        />
      </form>
      <p className="text-center text-xs text-gray-500">
        Don’t have an account?
        <a href="#" className="text-primary-blue hover:underline font-semibold pl-1">
          Sign up
        </a>
      </p>
    </div>
  );
}
