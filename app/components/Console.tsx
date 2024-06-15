'use client'

import React, { useState } from 'react'
import ConsoleLine from './ConsoleLine'

const Console: React.FC = () => {
  
  const handleClear = () => {
    const updatedLines = lines.filter((_, index) => index === 0);
    console.log('clear');
    setLines(updatedLines);
  };
  
  const [lines, setLines] = useState([<ConsoleLine key={0} handleClear={handleClear} />]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setLines([...lines, <ConsoleLine key={lines.length} handleClear={handleClear} />]);
    }
  };

  return (
    <div className='p-10 w-full min-h-screen' onKeyDown={handleKeyPress}>
      <div className='text-sm mb-3 selection:bg-orange-950 text-orange-600 font-thin'>
        type &apos;help&apos; to list all commands.
      </div>
      {lines.map((line) => line)}
    </div>
  );
};

export default Console;
