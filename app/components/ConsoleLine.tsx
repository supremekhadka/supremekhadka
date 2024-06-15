'use client'
import React, { useState } from 'react'
import { commands } from './Commands';

interface ConsoleLineProps {
  handleClear: () => void;
}

const ConsoleLine: React.FC<ConsoleLineProps> = ({ handleClear }) => {
  const [value, setValue] = useState('');
  const [response, setResponse] = useState('');
  const [isExecuted, setIsExecuted] = useState(false);

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsExecuted(true);
      switch(value) {
        case 'help':
          setResponse(commands.help);
          break;
        case 'hello':
          setResponse(commands.hello);
          break;
        case 'email':
          setResponse(commands.email);
          break;
        case 'contact':
          setResponse(commands.contact);
          break;
        case 'portfolio':
          setResponse(commands.portfolio);
          break;
        case 'cv':
          setResponse(commands.cv);
          break;
        case 'clear':
          handleClear();
          break;
        default:
          setResponse(commands.notFound + `${value}`);
      }
    }
  };

  return (
    <div className='mb-2 cursor-default selection:bg-orange-600'>
      <span className='flex items-start font-semibold select-none'>
        supremekhadka:<span className='text-orange-600 ml-2 mr-5'>$</span>
        <input 
          autoFocus 
          disabled={isExecuted} 
          className='font-medium caret-orange-600 resize-none inline outline-none w-full bg-inherit cursor-default' 
          value={value} 
          onKeyDown={handleSubmit} 
          onChange={(e) => setValue(e.target.value)} 
        />
      </span>
      <div className='break-words animate-typewriter'>{response}</div>
    </div>
  );
};

export default ConsoleLine;
