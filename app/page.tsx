"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <main className="flex flex-col items-center w-screen overflow-x-hidden">
        <section className="h-screen flex flex-col justify-center select-none relative w-screen items-center">
          <h1 className=" -translate-x-8 text-[7rem] font-bold tracking-tighter">
            supreme
          </h1>
          <h1 className=" -translate-y-[4.5rem] translate-x-[6.5rem] text-[3.2rem] text-amber-500 font-light tracking-tight italic z-10">
            portfolio
          </h1>
          <div className="absolute left-0 bottom-0 flex justify-between items-center px-10 h-20 w-screen text-2xl font-bold">
            <Link href={`https://instagram.com/supreme2.00`}>
              supremexvisuals
            </Link>
            <Link
              href={`https://instagram.com/supreme2.00 `}
              className="text-amber-500"
            >
              supreme2.00
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
