"use client";

import { useState } from "react";
import GetStartedButton from "./getStarted";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Moonshot } from "@lobehub/icons";
import { authClient } from "@/lib/auth-client";

const FloatingNavBar = () => {
  const { data: session, isPending } = authClient.useSession(); // Checking if the user is logged in

  if (isPending) {
    return (
      <>
        <AnimatePresence mode="wait" >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex w-full justify-between items-center"
            layoutId="floating-nav-bar"
          >
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[#1f1f1f] animate-pulse" />
              <div className="h-6 w-24 rounded bg-[#1f1f1f] animate-pulse" />
            </div>

            <div className="gap-10 hidden md:flex">
              <div className="h-5 w-16 rounded bg-[#1f1f1f] animate-pulse" />
              <div className="h-5 w-16 rounded bg-[#1f1f1f] animate-pulse" />
              <div className="h-5 w-16 rounded bg-[#1f1f1f] animate-pulse" />
            </div>

            <div className="flex gap-10">
              <div className="h-10 w-28 rounded-md bg-[#1f1f1f] animate-pulse" />
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
        className="flex w-full justify-between items-center"
        layoutId="floating-nav-bar"

      >
        <Link
          href="/"
          className="text-2xl font-bold flex justify-center items-center gap-2"
        >
          {" "}
          <span>
            <Moonshot size={22} />
          </span>{" "}
          Magic AI{" "}
        </Link>

        {session == null ? (
          <>
            <div className="gap-10 hidden md:flex">
              <div className="hover:text-gray-500 transition-all duration-300 hover:cursor-pointer">
                Features
              </div>
              <div className="hover:text-gray-500 transition-all duration-300 hover:cursor-pointer">
                About
              </div>
              <div className="hover:text-gray-500 transition-all duration-300 hover:cursor-pointer">
                Pricing
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="hover:text-gray-500 transition-all duration-300 hover:cursor-pointer">
              Canvas
            </div>
          </>
        )}

        <div className="flex gap-10">
          <GetStartedButton
            className="bg-white hover:bg-white/90 text-black active:scale-95 transition-all duration-300"
            variant="default"
            session={session}
            isPending={isPending}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default FloatingNavBar;
