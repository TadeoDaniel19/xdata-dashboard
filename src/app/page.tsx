"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AppPage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/login')
  }, [])

}
