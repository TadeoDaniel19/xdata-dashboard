"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormValues } from "@/types/general";
import LoginForm from "@/components/LoginForm/LoginForm";

export default function LoginPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 500));
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <LoginForm onSubmit={handleLogin} isSubmitting={isSubmitting} />
    </div>
  );
}