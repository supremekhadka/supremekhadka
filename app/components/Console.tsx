import React from 'react'
import ConsoleLine from './ConsoleLine'

const Console = () => {

  return (
    <div className='p-10'>
        <span className='text-sm text-orange-600 font-thin'>type &apos;help&apos; to list all commands.</span>
        <br />
        <br />
        <ConsoleLine />
    </div>
  )
}

export default Console