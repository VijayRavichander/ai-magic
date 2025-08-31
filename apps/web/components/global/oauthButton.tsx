"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Google } from "@lobehub/icons";

interface OAuthButtonProps {
  provider: "google" | "github";
  signUp?: boolean;
}

export const OAuthButton = ({
  provider,
  signUp,
}: OAuthButtonProps) => {
  const [isPending, setIsPending] = useState(false);

  async function handleClick() {
    setIsPending(true);

    await authClient.signIn.social({
      provider,
      callbackURL: "/profile",
      errorCallbackURL: "/auth/login/error",
    });

    setIsPending(false);
  }

  const action = signUp ? "Up" : "In";
  const providerName = provider === "google" ? "Google" : "GitHub";

  return (
    <Button onClick={handleClick} disabled={isPending} className="cursor-pointer active:scale-95 transition-all duration-300 hover:bg-white/10">
      Sign {action} with {providerName}
      {provider === "google" && <Google className="w-4 h-4" />}
    </Button>
  );
};