"use client";

import { ThemeToggle } from "@/components/shared/themeToggle";
import { Button } from "@/components/ui/button";
import { authClient } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const { data: session } = authClient.useSession();

  const router = useRouter();

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          toast.success("Sign out successfully");
        },
      },
    });
  }

  return (
    <div>
      <ThemeToggle />
      <h1>Hi there, welcome to my website</h1>

      {session ? (
        <div>
          <p>{session.user.name}</p>
          <Button onClick={signOut}>Logout</Button>
        </div>
      ) : (
        <Button onClick={() => router.push("/login")}>Login</Button>
      )}
    </div>
  );
}
