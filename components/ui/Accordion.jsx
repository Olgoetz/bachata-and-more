import React, { useState } from "react";
import { Collapse } from "react-collapse";

const Accordion = ({ title, content, styling }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="flex flex-col">
        <div
          className={`flex cursor-pointer items-center uppercase font-bold round-lg p-2 justify-between text-[#737373] ${styling}`}
          onClick={() => setIsActive(!isActive)}
        >
          <h3>{title}</h3>

          <div className="text-2xl">{isActive ? "-" : "+"}</div>
        </div>

        <Collapse isOpened={isActive}>
          <div className="p-2">{content}</div>
        </Collapse>
      </div>
    </>
  );
};

export default Accordion;
