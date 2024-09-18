"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FlipText from "./FlipComponents/FlipText";
import FlipButton from "./FlipComponents/FlipButton";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (position > 80) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (position > 80) {
      setIsHidden(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`flex justify-between items-center px-10 h-20 text-xl lg:text-2xl fixed w-full z-20 transition-opacity duration-500 ${
        isHidden ? "opacity-0" : "opacity-100"
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: scrollPosition > 80 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-8 dark:text-amber-50 text-black overflow-hidden flex flex-col items-center justify-start">
        <FlipText className="font-semibold select-none cursor-default">
          portfolio
        </FlipText>
      </div>
      <button className="text-amber-500 cursor-pointer">
        <FlipButton className="font-bold">menu</FlipButton>
      </button>
    </motion.div>
  );
};

export default Header;
