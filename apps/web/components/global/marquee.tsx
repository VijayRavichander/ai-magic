"use client";
import { DeepMind, Fal, Gemini, OpenAI } from '@lobehub/icons';
import { motion } from 'framer-motion';

export default function Marquee() {
  return (
    <div>
    <motion.div
      initial={{ opacity: 0, }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
      className="flex items-center justify-evenly h-[140px]"
    >
      <Gemini.Combine size={30} className="hover:cursor-pointer" />
      <Fal.Combine size={30} className="hover:cursor-pointer" />
      <OpenAI.Combine size={30} className="hover:cursor-pointer" />
    </motion.div>
    </div>
  );
};


