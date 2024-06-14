"use client";

import { useRef, useState } from "react";
import styles from "./example3.module.css";

const OnlyTotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const amountRef = useRef<HTMLSelectElement>(null);

  return (
    <>
      <div className={styles.exampleInfo}>
        aria-live: polite - Solo il valore del prezzo totale viene letto
      </div>
      <div>
        <span>Numero di articoli da acquistare </span>
        <select
          ref={amountRef}
          onChange={(event) => {
            setTotalPrice(
              Number.parseInt(amountRef.current?.value as string) * 4
            );
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div aria-live="polite" className={styles.price}>
        <span>Prezzo totale</span>
        <label>{totalPrice}</label>
        <span>€</span>
      </div>
    </>
  );
};

const FullTotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const amountRef = useRef<HTMLSelectElement>(null);

  return (
    <>
      <div className={styles.exampleInfo}>
        aria-live: polite and aria-atomic: true - Viene letta la riga intera del
        prezzo totale
      </div>
      <div>
        <span>Numero di articoli da acquistare </span>
        <select
          ref={amountRef}
          onChange={(event) => {
            setTotalPrice(
              Number.parseInt(amountRef.current?.value as string) * 4
            );
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div aria-live="polite" aria-atomic="true" className={styles.price}>
        <span>Prezzo totale</span>
        <label>{totalPrice}</label>
        <span>€</span>
      </div>
    </>
  );
};

const AriaLabel = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const amountRef = useRef<HTMLSelectElement>(null);

  return (
    <>
      <div className={styles.exampleInfo}>
        aria-label, aria-labelledby - Naviga sul combo degli articoli per
        ascoltare la label nascosta. Cambia il valore per ascoltare la label
        nascosta del totale. Naviga sul bottone per ascoltare la label associata
      </div>
      <div>
        <span>Articoli da acquistare </span>
        <select
          ref={amountRef}
          aria-label="Seleziona il numero di articoli che vuoi acquistare"
          onChange={(event) => {
            setTotalPrice(
              Number.parseInt(amountRef.current?.value as string) * 4
            );
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div id="idPrice" style={{ display: "none" }}>
        Premi per acquistare {amountRef.current?.value} articoli per un totale
        di {totalPrice} €
      </div>
      <div aria-live="polite" aria-atomic="true" className={styles.price}>
        <span>Prezzo totale</span>
        <label>{totalPrice}</label>
        <span>€</span>
      </div>
      <button className={styles.ctaCart} aria-labelledby="idPrice">
        🛒
      </button>
    </>
  );
};

export const UnderstandableExample = () => {
  const [showOnlyTotal, setShowOnlyTotal] = useState(false);
  const [showFullTotal, setShowFullTotal] = useState(false);
  const [showAriaLabel, setShowAriaLabel] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.cell}>
        <button
          className={styles.actionShowExample}
          onClick={() => setShowOnlyTotal(!showOnlyTotal)}
        >
          Only total
        </button>
        {showOnlyTotal && <OnlyTotalPrice />}
      </div>
      <div className={styles.cell}>
        <button
          className={styles.actionShowExample}
          onClick={() => setShowFullTotal(!showFullTotal)}
        >
          Full total
        </button>
        {showFullTotal && <FullTotalPrice />}
      </div>
      <div className={styles.cell}>
        <button
          className={styles.actionShowExample}
          onClick={() => setShowAriaLabel(!showAriaLabel)}
        >
          Aria label
        </button>
        {showAriaLabel && <AriaLabel />}
      </div>
    </div>
  );
};
