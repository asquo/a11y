"use client";

import { useRef, useState } from "react";
import styles from "./example4.module.css";

export const Demo4 = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          TypeScript ha nel suo nome la sua missione: fornire &quot;un
          JavaScript con il supporto opzionale della tipizzazione stretta&quot;
          e la cui compilazione genera codice JavaScript standard. Una soluzione
          ideale per i professionisti che, abituati al tradizionale approccio
          orientato agli oggetti (con linguaggi come Java, C++ o C#) soffrono il
          passaggio a JavaScript per l&apos;assenza della gestione dei tipi di
          dato.
        </div>
        <div>
          Un estratto dalla documentazione ufficiale:
          <div lang="en" style={{ fontStyle: "italic" }}>
            TypeScript offers all of JavaScript’s features, and an additional
            layer on top of these: TypeScript’s type system. For example,
            JavaScript provides language primitives like string and number, but
            it doesn’t check that you’ve consistently assigned these. TypeScript
            does.
          </div>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontStyle: "italic",
            }}
          >
            <a
              href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
              target="_blank"
            >
              Fonte: TypeScript for JavaScript Programmers
            </a>
          </span>
        </div>
      </div>

      <button
        className={styles.actionShowExample}
        onClick={() => {
          //setShowInfoModal(!showInfoModal);
          if (dialogRef.current) {
            dialogRef.current.showModal();
            dialogRef.current.className = styles.modal;
          }
        }}
      >
        Scopri cosa puoi fare
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => {
          if (dialogRef.current) {
            dialogRef.current.className = "";
          }
        }}
      >
        <main>
          <ul>
            <li>
              <a
                href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#types-by-inference"
                target="_blank"
              >
                Types by Inference
              </a>
            </li>
            <li>Defining Types</li>
            <li>Composing Types</li>
            <li>Structural Type System</li>
            <li>Static type-checking</li>
            <li>Type Annotations on Variables</li>
            <li>Object Types</li>
            <li>Union Types</li>
            <li>Type Aliases</li>
            <li>Interfaces</li>
            <li>Type Assertions</li>
            <li>Literal Types</li>
          </ul>
        </main>
        <footer>
          <button
            className={styles.actionModal}
            onClick={() => {
              // setShowInfoModal(false);
              dialogRef.current?.close();
            }}
          >
            Chiudi
          </button>
        </footer>
      </dialog>

      {/* {showInfoModal && (
        <>
          <div className={styles.modalOverlay}></div>
          <div className={styles.modal}>
            <main>
              <ul>
                <li>Types by Inference</li>
                <li>Defining Types</li>
                <li>Composing Types</li>
                <li>Structural Type System</li>
                <li>Static type-checking</li>
                <li>Type Annotations on Variables</li>
                <li>Object Types</li>
                <li>Union Types</li>
                <li>Type Aliases</li>
                <li>Interfaces</li>
                <li>Type Assertions</li>
                <li>Literal Types</li>
              </ul>
            </main>
            <footer>
              <button
                className={styles.actionModal}
                onClick={() => setShowInfoModal(false)}
              >
                Chiudi
              </button>
            </footer>
          </div>
        </>
      )} */}
    </div>
  );
};
