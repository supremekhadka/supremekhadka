import React from "react";

const Help = () => {
  return (
    <>
      <div className="selection:bg-orange-600">
        <br />
        Available Commands:
        <ul>
          <br />
          <li className="flex">
            <div className="w-[8rem]">hello: </div>About Me
          </li>
          <li className="flex">
            <div className="w-[8rem]">email: </div>My Email Id
          </li>
          <li className="flex">
            <div className="w-[8rem]">contact: </div>My Contact Information
          </li>
          <li className="flex">
            <div className="w-[8rem]">portfolio: </div>My Portfolio
          </li>
          <li className="flex">
            <div className="w-[8rem]">cv: </div>Download My CV
          </li>
          <li className="flex">
            <div className="w-[8rem]">clear: </div>Clear Screen
          </li>
        </ul>
        <br />
      </div>
    </>
  );
};

export default Help;
