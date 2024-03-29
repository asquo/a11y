"use client";

import { useRef, useState } from "react";

export const Example2 = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const amountRef = useRef<HTMLSelectElement>();

  return (
    <>
      <div>Example 2 - aria-live - Only total price is read</div>
      <div>
        <span>Amount</span>
        <select
          ref={amountRef}
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
      <div aria-live="polite">
        <span>Total price example 2 €</span>
        <label>{totalPrice}</label>
      </div>
    </>
  );
};
