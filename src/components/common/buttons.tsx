"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<typeof motion.button> {
  variant?: "primary" | "secondary" | "home" | "primaryDark" | "yellow";
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const typeVariants: Record<string, string> = {
    primary: "btn-primary btn dark:bg-body",
    secondary: "btn btn-secondary",
    home: "btn-home px-8 py-2 rounded-full font-medium text-xl",
    primaryDark:
      "bg-body text-white shadow-custom-light transform hover:bg-primary hover:text-body hover:shadow-custom-dark hover:translate-y-[-2px] p-2 rounded dark:bg-primary dark:text-body dark:hover:bg-body dark:hover:text-white",
    yellow: "bg-yellow-300 hover:bg-yellow-400 text-black",
  };

  const buttonClass = `${typeVariants[variant] || ""} p-2 rounded ${className}`;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClass}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
