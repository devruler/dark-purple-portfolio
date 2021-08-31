import React from "react";

interface PropsInterface {
    headingText: string;
}

function Heading({headingText}: PropsInterface) {
  return (
    <h2 className="text-white mb-8 uppercase text-2xl font-bold font-mono text-center">
      {headingText}
    </h2>
  );
}

export default Heading;
