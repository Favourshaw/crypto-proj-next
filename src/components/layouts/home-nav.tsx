"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "../common/buttons";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "how", label: "How it works" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 0);

      const adjustedScrollY = scrollY + 150;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (
          section &&
          section.offsetTop <= adjustedScrollY &&
          section.offsetTop + section.offsetHeight > adjustedScrollY
        ) {
          setActive(link.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-home-bg">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`satoshi fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-lg transition-colors duration-300 ${
          scrolled ? "bg-home-bg" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 md:px-10 py-4 md:py-5">
          <div className="w-24 h-6 bg-gray-300 rounded" />

          <div className="hidden md:flex space-x-6 text-sm relative">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="relative cursor-pointer"
                onClick={() => {
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActive(link.id);
                }}
              >
                {active === link.id && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded"
                  />
                )}
                <span
                  className={`transition-colors ${
                    active === link.id ? "text-white" : "text-gray-300"
                  }`}
                >
                  {link.label}
                </span>
              </div>
            ))}
          </div>

          <div className="hidden md:flex">
            <Button variant="home">Login</Button>
          </div>

          <div className="block md:hidden z-50">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="text-white text-3xl"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      <div
        ref={sidebarRef}
        className={`flex md:hidden fixed top-0 left-0 h-full w-64 bg-home-bg text-white p-6 flex-col gap-6 transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        {navLinks.map((link) => (
          <div
            key={link.id}
            className="text-white py-2 px-3 rounded hover:bg-gray-700"
            onClick={() => {
              document
                .getElementById(link.id)
                ?.scrollIntoView({ behavior: "smooth" });
              setOpen(false);
              setActive(link.id);
            }}
          >
            {link.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
