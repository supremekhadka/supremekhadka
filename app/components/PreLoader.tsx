"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PreLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0.4, 0, 0.5, 1], // Custom Bezier curve
          }}
          exit={{ y: "-100%" }}
        >
          {/* <div className="w-16 h-16 border-4 border-t-4 border-amber-500 border-solid rounded-full animate-spin"></div> */}
          <h1 className="text-xl">website in progress</h1>
        </motion.div>
      )}
      {children}
    </>
  );
};

export default PreLoader;
