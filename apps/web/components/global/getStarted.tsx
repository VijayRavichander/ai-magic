"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import type { ComponentProps } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { motion } from "framer-motion";

export default function GetStartedButton({
  className,
  variant,
  session,
  isPending,
}: {
  className?: string;
  variant: ComponentProps<typeof Button>["variant"];
  session: any;
  isPending: boolean;
}) {
  const [profileDropDownToggle, setProfileDropDownToggle] = useState(false);
  const profileDropDownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // @ts-ignore
  useOnClickOutside(profileDropDownRef, () => {
    setProfileDropDownToggle(false);
  });

  if (isPending) {
    return (
      <div>
        <Button variant="outline">Get Started</Button>
      </div>
    );
  }

  const handleClick = () => {
    if (session) {
      setProfileDropDownToggle(!profileDropDownToggle);
    } else {
      router.push("/signin");
    }
  };

  return (
    <div className={`flex flex-col items-center gap-4`}>
      <div ref={profileDropDownRef}>
        <Button
          variant={variant ? variant : null}
          onClick={handleClick}
          className={`${className}  ${session ? "bg-[#1f1f1f] hover:bg-black/60" : ""}`}
        >
          {session ? <ProfileButton session={session} /> : "Get Started"}
        </Button>

        {profileDropDownToggle && (
          <motion.div className="absolute md:top-22 top-16 right-5 w-30 bg-[#1f1f1f] rounded-md p-2">
            <div
              className="text-xs my-2 cursor-pointer hover:underline"
              onClick={() => {
                router.push("/profile");
              }}
            >
              Profile
            </div>
            <div
              className="text-xs my-2 cursor-pointer hover:underline"
              onClick={() => {
                authClient.signOut();
                router.push("/");
                setProfileDropDownToggle(false);
              }}
            >
              Logout
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export const ProfileButton = ({ session }: { session: any }) => {
  return (
    <div className="inline">
      <Image
        src={session.user.image}
        alt={session.user.name}
        width={20}
        height={20}
        className="rounded-full"
      />
    </div>
  );
};
