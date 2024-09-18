"use client";
import React from "react";
import Link from "next/link";
import Card from "./components/CardComponents/Card";

const page = () => {
  const images = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2b9662146490233.62b18f660af43.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2b9662146490233.62b18f660af43.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2b9662146490233.62b18f660af43.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2b9662146490233.62b18f660af43.png",
  ];

  return (
    <>
      <main className="flex flex-col items-center w-full bg-white dark:bg-black">
        <section className="h-screen min-h-[600px] flex flex-col justify-center relative w-full items-center ">
          <h1 className="text-[5rem] lg:text-[7rem] dark:text-amber-50 text-black font-bold tracking-tighter">
            supreme
          </h1>
          <h1 className="-translate-y-[3.5rem] translate-x-[6rem] lg:-translate-y-[4.65rem] lg:translate-x-[8.6rem] text-[2.5rem] lg:text-[3.2rem] text-amber-500 font-light tracking-tight italic z-10">
            portfolio
          </h1>
          <div className="absolute dark:text-amber-50 text-black  left-0 bottom-0 flex justify-between items-center px-10 h-20 w-full text-lg md:text-2xl font-bold">
            <Link href={`https://instagram.com/supremexvisuals`}>
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
        <section
          id="graphics"
          className="min-h-[600px] h-auto flex flex-col justify-start relative w-full items-center py-20 px-5 sm:px-10 lg:px-20 overflow-x-hidden"
        >
          <h1 className="dark:text-amber-50 text-black text-[23vw] -translate-y-[20vw] sm:-translate-y-[15vw] lg:-translate-y-[11vw] font-bold w-max tracking-tighter  z-0">
            GRAPHICS
          </h1>
          <div className="w-full text-black bg-amber-50 -translate-y-[calc(20vw+75px)] sm:-translate-y-[calc(15vw+110px)] lg:-translate-y-[calc(11vw+220px)] h-max rounded-[2.5rem] sm:rounded-[5rem] lg:rounded-[10rem] drop-shadow-[0_-35px_40px_rgba(0,0,0,0.25)] sm:px-12 lg:px-28 py-12 lg:py-36 flex justify-center items-start gap-x-10 gap-y-4 sm:gap-y-12 flex-wrap">
            <Card images={images} />
            <Card images={images} />
            <Card images={images} />
            <Card images={images} />
            <Card images={images} />
            <Card images={images} />
            <Card images={images} />
            <Card images={images} />
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
