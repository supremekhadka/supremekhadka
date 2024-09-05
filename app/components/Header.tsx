"use client";
import React from "react";
import FlipText from "./FlipComponents/FlipText";
import FlipButton from "./FlipComponents/FlipButton";

const Header = () => {
  return (
    <>
      <div
        className={`flex justify-between items-center px-10 h-20 text-2xl fixed w-full z-20`}
      >
        <div className="h-8 overflow-hidden flex flex-col  items-center justify-start">
          <FlipText className="font-semibold">portfolio</FlipText>
        </div>
        <button className="text-amber-500  cursor-pointer">
          <FlipButton className="font-bold">menu</FlipButton>
        </button>
      </div>
    </>
  );
};

export default Header;
