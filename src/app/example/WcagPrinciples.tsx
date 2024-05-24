"use client";

import { useRef, useState } from "react";

export const WcagPrinciples = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const amountRef = useRef<HTMLSelectElement>();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
      <div>Perceivable</div>
      <div>Operable</div>
      <div>Understandable</div>
      <div>Robust</div>
    </div>
  );
};
