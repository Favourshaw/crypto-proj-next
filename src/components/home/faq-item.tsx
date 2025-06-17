"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FaqItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border rounded-lg border-[#EBEBEB] p-4 m-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left  text-[#1b1b1b] home-text"
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? <FiMinus /> : <FiPlus />}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2 home-text-sm">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
