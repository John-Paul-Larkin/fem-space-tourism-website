"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  (() => router.push("/home"))();

  // Not sure about this, but wanted this root segment to be /home

  return <></>;
}
