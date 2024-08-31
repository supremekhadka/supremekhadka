"use client";
import React from "react";
import { delay, motion } from "framer-motion";

const page = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-screen flex flex-col justify-center select-none"
        >
          <h1 className=" -translate-x-8 text-[10rem] font-medium tracking-tighter">
            Supreme
          </h1>
          <h1 className=" -translate-y-[7rem] translate-x-[18rem] text-[6rem] text-orange-400 font-light tracking-tight italic z-10">
            portfolio
          </h1>
        </motion.div>
      </main>
    </>
  );
};

export default page;
