"use client";
import React from "react";

const Header = () => {
  return (
    <>
      <div
        className={`flex justify-between items-center px-10 h-20 text-2xl fixed w-full z-20`}
      >
        <div className="h-8 overflow-hidden flex flex-col  items-center justify-start">
          <h1 className="font-semibold">portfolio</h1>
          <h1 className="font-semibold">supreme</h1>
        </div>
        <button className="text-amber-500 font-bold cursor-pointer">
          menu
        </button>
      </div>
    </>
  );
};

export default Header;
