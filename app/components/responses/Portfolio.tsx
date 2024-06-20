"use client";
import React from "react";
import { LampContainer } from "./LampContainer";
import Image from "next/image";
import Image1o1 from "../../../public/assets/graphics/gfx2-1.jpg";

export function Portfolio() {
  return (
    <LampContainer>
      <div className="selection:bg-orange-600 flex flex-wrap sm:gap-4 gap-2 justify-center items-start max-w-[100rem] mx-auto">
        <Image src={Image1o1} width={350} alt="Image 1" />
        <Image src={Image1o1} width={350} alt="Image 1" />
        <Image src={Image1o1} width={350} alt="Image 1" />
        <Image src={Image1o1} width={350} alt="Image 1" />
        <Image src={Image1o1} width={350} alt="Image 1" />
        <Image src={Image1o1} width={350} alt="Image 1" />
        <div className="w-[350px]"></div>
        <div className="w-[350px]"></div>
        <div className="w-[350px]"></div>
        <div className="w-[350px]"></div>
      </div>
    </LampContainer>
  );
}
