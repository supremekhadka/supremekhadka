'use client'

import React from 'react'
import './Loader.css'
import { useState, useEffect } from 'react';

const Loader = () => {
  const [display, setDisplay] = useState('flex');
  
  useEffect(() => {
    setTimeout(() => {
      setDisplay((display) => 'hidden');
    }, 4000);
  });

  return (
    <div className={`${display} bg-inherit w-screen absolute justify-center items-center h-screen`}>
        <h1 className='loader text-xl'><span className='text-orange-600 font-semibold'>cd</span> supremekhadka</h1>
    </div>
  )
}

export default Loader