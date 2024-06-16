'use client'

import React, { useState } from 'react'
import Response from './Response';

const Console: React.FC = () => {

  const [value, setValue] = useState('');
  const [command, setCommand] = useState('');
  const [line, setLine] = useState<Array<{ command: string; response: React.ReactNode }>>([]);

  const handleCommand = (cmd: string) => {
    setCommand(cmd);
    const newResponse = <Response command={cmd} />;
    setLine([...line, { command: cmd, response: newResponse }]);
  }

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(e.currentTarget.value);
      setValue('');
    }

    if (e.currentTarget.value === 'clear' || e.currentTarget.value === 'cls') {
      setLine([]);
    }

    if (e.currentTarget.value === 'cv' || e.currentTarget.value === 'resume') {
       const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1uOZcxKFGFqUL7dwcs3otMgPVGZo4t_eD';
        link.download = 'Supreme_Khadka-Web_Developer-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  }

  return (
    <div className='p-10 w-full min-h-screen cursor-default'>
      <div className='text-sm mb-3 selection:bg-orange-950 text-orange-600 font-thin'>
        type &apos;help&apos; to list all commands.
      </div>
      {line.map((entry, index) => (
        <div key={index} className='whitespace-pre-line break-words animate-typewriter'>
          <span className='flex items-start font-semibold selection:bg-orange-600'>
            supremekhadka:<span className='text-orange-600 ml-2 mr-5'>$</span>
            <span className='font-medium'>{entry.command}</span>
          </span>
          <div className='sm:ml-[11rem] whitespace-pre-line break-words'>{entry.response}</div>
        </div>
      ))}
      <div className='mb-2 cursor-default selection:bg-orange-600'>
        <span className='flex items-start font-semibold select-none'>
          supremekhadka:<span className='text-orange-600 ml-2 mr-5'>$</span>
          <input 
            autoFocus 
            className='font-medium caret-orange-600 resize-none inline outline-none w-full bg-inherit cursor-default' 
            value={value} 
            onKeyDown={handleSubmit} 
            onChange={(e) => setValue(e.target.value)} 
          />
        </span>
          
      </div>
    </div>
  );
};

export default Console;
