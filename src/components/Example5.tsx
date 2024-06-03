"use client";

import { useRef, useState } from "react";

export const Example5 = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <>
      <div>
        Example 5 - aria-label on button and custom list with and tabIndex
      </div>
      <button
        onClick={() => {
          setIsOpen1(!isOpen1);
        }}
      >
        Open custom list without role
      </button>
      {isOpen1 && (
        <div>
          <div>Item1</div>
          <div>Item2</div>
          <div>Item3</div>
        </div>
      )}
      <button
        aria-label="Click to open custom list"
        onClick={() => {
          setIsOpen2(!isOpen2);
        }}
      >
        Open custom list with role and tab index
      </button>
      {isOpen2 && (
        <div role="list" tabIndex={1}>
          <div role="listitem">Item1</div>
          <div role="listitem">Item2</div>
          <div role="listitem">Item3</div>
        </div>
      )}
    </>
  );
};
