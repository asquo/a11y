"use client";

import { useRef, useState } from "react";

export const Example4 = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const amountRef = useRef<HTMLSelectElement>();

  return (
    <>
      <div>
        Example 4 - aria-label - Tab on Amount to hear label. Change amount to
        hear label on parent
      </div>
      <div>
        <span>Amount</span>
        <select
          ref={amountRef}
          aria-label="Select the amount of item you want to buy"
          onChange={(event) => {
            setTotalPrice(Number.parseInt(amountRef.current?.value) * 4);
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div aria-live="polite" aria-atomic="true">
        <span aria-label="Aria label on total price">
          Total price example 4 with aria label €
        </span>
        <label>{totalPrice}</label>
      </div>
      <div
        aria-live="polite"
        aria-atomic="true"
        aria-label="Aria label on parent"
      >
        <span>Total price example 4 with aria label on parent €</span>
        <label>{totalPrice}</label>
      </div>
    </>
  );
};
