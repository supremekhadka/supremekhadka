import React from "react";
import Help from "./responses/Help";
import Hello from "./responses/Hello";
import Email from "./responses/Email";
import Contact from "./responses/Contact";
import { Portfolio } from "./responses/Portfolio";
import CV from "./responses/CV";

const Response = ({ command }) => {
  const trimmedCommand = command.trim().toLowerCase();
  const validCommands = [
    "help",
    "hello",
    "email",
    "contact",
    "portfolio",
    "cv",
    "resume",
    "clear",
  ];
  const isValidCommand = validCommands.includes(trimmedCommand);

  if (trimmedCommand === "") {
    return null;
  }

  return (
    <>
      {trimmedCommand === "help" && <Help />}

      {trimmedCommand === "hello" && <Hello />}

      {trimmedCommand === "email" && <Email />}

      {trimmedCommand === "contact" && <Contact />}

      {trimmedCommand === "portfolio" && <Portfolio />}

      {(trimmedCommand === "cv" || trimmedCommand === "resume") && <CV />}

      {!isValidCommand && (
        <div className="selection:bg-orange-600">
          <br />
          Oops! Looks like we don&apos;t have that command yet. Command Not
          Found: {command}
          <br />
          <br />
        </div>
      )}
    </>
  );
};

export default Response;
