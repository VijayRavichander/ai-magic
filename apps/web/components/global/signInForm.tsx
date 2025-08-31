"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Github } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { OAuthButton } from "./oauthButton";
import { motion } from "framer-motion";
import { Moonshot } from "@lobehub/icons";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, { message: "Password is required." }),
});

export type SignInFormValues = z.infer<typeof formSchema>;

export type SignInFormProps = {
  onSubmit: (values: SignInFormValues) => void;
  onGitHubSignIn?: () => void;
  isPending?: boolean;
  errorMessage?: string | null;
  redirectUrl?: string | null;
};

export function SignInForm({
  onSubmit,
  onGitHubSignIn,
  isPending,
  redirectUrl,
}: SignInFormProps) {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card className="w-[500px] max-w-md px-10 bg-foreground text-white border-none">
          <CardHeader>
            <CardTitle className="text-white text-center">
              <div className="text-2xl font-bold flex justify-center items-center gap-2 text-muted">
                <span>
                  <Moonshot size={22} />
                </span>{" "}
                Magic AI
              </div>
              <div className="text-sm text-white">Log In into Magic AI</div>
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-center">
            <OAuthButton provider="google" />
          </CardDescription>
          <CardFooter className="block text-xs text-center">
            Dont have an account?
            <Link
              href="/signup"
              className="text-white inline underline active:scale-95 transition-all duration-300 px-1 hover:text-white/80"
            >
              Sign Up
            </Link>
            <span className="inline">or</span>
            <Link
              href="/about"
              className="text-white inline underline active:scale-95 transition-all duration-300 px-1 hover:text-white/80"
            >
              Learn More
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
}


export function SignInForm({

})