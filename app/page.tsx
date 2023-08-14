"use client";
import InputFrom from "@/components/form/InputFrom";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Form } from "@/components/ui/form";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const handleOnclick = () => {
    router.push("/allTodos");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={handleOnclick}>all todos</Button>
      <InputFrom />
    </main>
  );
}
