'use client'
import React, { useState } from 'react'

const ConsoleLine = () => {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('');

  return (
      <>
      <span className='text-sm select-none'>supremekhadka: $&nbsp;
         <input className={`${status} outline-none bg-inherit cursor-default`} value={value} onChange={(e) => setValue(e.target.value)} />
      </span>
      </>
  )
}

export default ConsoleLine