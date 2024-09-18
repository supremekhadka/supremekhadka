"use client";
import React from "react";
import Image from "next/image";

const Card = ({ images }) => {
  const numberOfImages = images.length;

  return (
    <div
      className={`relative *:h-[425px] bg-black  min-w-[350px] rounded-[4rem]  overflow-y-clip `}
    >
      <div
        className={` rounded-[4rem] relative h-[400px] w-full overflow-show 
`}
        style={{
          rotate: `-${(numberOfImages / 2) * 5}deg`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="absolute flex h-full justify-center items-end top-0 left-0 "
            style={{
              bottom: 0,
              right: 0,
              transform: `translate(${index * 5}px, ${index * 5}px) rotate(${
                index * 5
              }deg)`,
              zIndex: numberOfImages - index,
              clipPath: `inset(0 0 ${index * 10}px 0)`,
            }}
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              width={260}
              height={300}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="h-full w-full rounded-[4rem]  bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0)] to-25%  z-50 absolute top-0"></div>
    </div>
  );
};

export default Card;
