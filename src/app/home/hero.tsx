"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/common/buttons";

const Hero: React.FC = () => {
  return (
    <div className="min-h-[80%] lg:min-h-screen w-full bg-home-bg text-white px-6 pt-12 flex flex-col items-center justify-center text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mt-[4.5rem] lg:mt-24"
      >
        <div className="satoshi text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex text-center justify-center items-center flex-wrap w-full max-w-[548px] mx-auto">
          Instant Crypto
          <span className="inline-flex items-center mx-2">
            <Image
              src="/assets/home/crypto-stack.svg"
              alt="Crypto Stack"
              width={44}
              height={44}
              className="h-9 md:h-11 w-auto"
            />
          </span>
          to Naira
          <span className="inline-flex items-center mx-2">
            <Image
              src="/assets/home/naira.svg"
              alt="Naira Icon"
              width={44}
              height={44}
              className="h-9 md:h-11 w-auto"
            />
          </span>
          Swaps
          <span className="text-green-400 block md:inline">Without Limits</span>
        </div>
        <div className="satoshi text-gray-300 text-md md:text-xl mt-4 w-full max-w-[687px] mx-auto">
          Fast, secure conversions from any cryptocurrency directly to your
          Nigerian bank account. No hidden fees, competitive rates, available
          24/7.
        </div>
        <Button variant="home" className="mt-4">
          Start Swapping Now
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex justify-center items-center gap-10 mt-14 flex-wrap"
      >
        <div className="w-full max-w-[443px] h-full max-h-[517px] flex items-center justify-center">
          <Image
            src="/assets/home/monkey-bnb.png"
            alt="Monkey"
            className="object-contain"
            width={443}
            height={517}
          />
        </div>
        <div className="w-full max-w-[443px] h-full max-h-[517px] flex items-center justify-center">
          <Image
            src="/assets/home/cat-naira.png"
            alt="Cat"
            className="object-contain"
            width={443}
            height={517}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
