import React from 'react'

const Response = ({ command }) => {
  const trimmedCommand = command.trim().toLowerCase();
  const validCommands = ['help', 'hello', 'email', 'contact', 'portfolio', 'cv', 'resume', 'clear'];
  const isValidCommand = validCommands.includes(trimmedCommand);

  if (trimmedCommand === '') {
    return null;
  }

  return (
    <>
      {trimmedCommand === 'help' && (
        <div className='selection:bg-orange-600'>
          <br />
          Available Commands:
          <ul>
            <br />
            <li className='flex'><div className='w-[8rem]'>hello: </div>About Me</li>
            <li className='flex'><div className='w-[8rem]'>email: </div>My Email Id</li>
            <li className='flex'><div className='w-[8rem]'>contact: </div>My Contact Information</li>
            <li className='flex'><div className='w-[8rem]'>portfolio: </div>My Portfolio</li>
            <li className='flex'><div className='w-[8rem]'>cv: </div>Download My CV</li>
            <li className='flex'><div className='w-[8rem]'>clear: </div>Clear Screen</li>
          </ul>
          <br />
        </div>
      )}

      {trimmedCommand === 'hello' && (
        <div className='selection:bg-orange-600'><br />Hi, I am Supreme Khadka, an aspiring CS student, web developer, and graphics designer.<br /><br /></div>
      )}
      
      {trimmedCommand === 'email' && (
        <div className='selection:bg-orange-600'><br />Mail me at: <a href='mailto:supremekhadka2@gmail.com'>supremekhadka2@gmail.com</a><br /><br /></div>
      )}
      
      {trimmedCommand === 'contact' && (
        <div className='selection:bg-orange-600'><br />Call me at: <a className='text-orange-600 font-semibold' href="tel:+9779861584426">+977 986 158 4426</a><br /><br /></div>
      )}
      
      {trimmedCommand === 'portfolio' && (
        <div className='selection:bg-orange-600'><br />I will be uploading it soon...<br /><br /></div>
      )}
      
      {trimmedCommand === 'cv' || trimmedCommand === 'resume' && (
        <div className='selection:bg-orange-600'><br />I have sent you my CV. Please check your downloads.<br /><br /></div>
      )}

      {!isValidCommand && (
        <div className='selection:bg-orange-600'><br />Oops! Looks like we don&apos;t have that command yet. Command Not Found: {command}<br /><br /></div>
      )}
    </>
  )
}

export default Response;
