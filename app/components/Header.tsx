"use client";
import React from "react";
import FlipText from "./FlipComponents/FlipText";

const Header = () => {
  return (
    <>
      <div
        className={`flex justify-between items-center px-10 h-20 text-2xl fixed w-full z-20`}
      >
        <div className="h-8 overflow-hidden flex flex-col  items-center justify-start">
          <FlipText className="font-semibold">portfolio</FlipText>
        </div>
        <button className="text-amber-500 font-bold cursor-pointer">
          menu
        </button>
      </div>
    </>
  );
};

export default Header;
