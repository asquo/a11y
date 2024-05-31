"use client";

import styles from "./page.module.css";
import { useMemo, useState } from "react";
import { Demo1, Example1 } from "./example/Example1";
import { Demo2, Example2 } from "./example/Example2";
import { Example3 } from "./example/Example3";
import { Example4 } from "./example/Example4";
import { Example5 } from "./example/Example5";
import { Example6 } from "./example/Example6";
import { WcagPrinciples } from "./example/WcagPrinciples";

export default function Home() {
  const [exampleContent, setExampleContent] =
    useState<React.ReactElement>(null);

  const exampleList = useMemo(
    () => [
      {
        id: "Demo1",
        // component: <Example1 />,
        component: <Demo1 />,
      },
      {
        id: "Demo2",
        // component: <Example2 />,
        component: <Demo2 />,
      },
      {
        id: "Demo3",
        component: <Example3 />,
      },
      {
        id: "Demo4",
        component: <Example4 />,
      },
      {
        id: "Demo5",
        component: <Example5 />,
      },
      {
        id: "Demo6",
        component: <Example6 />,
      },
    ],
    []
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div className={styles.skipContentContainer}>
          <a href="#main" className={styles.skipContentItem}>
            Skip to main content
          </a>
          <a href="#footer" className={styles.skipContentItem}>
            Skip to footer content
          </a>
        </div>
        <div>
          <div>ARX11Y - A(RX)cessibility</div>
        </div>
      </div>
      <main id="main" className={styles.main}>
        <nav>
          {exampleList.map((ex) => {
            return (
              <button
                key={ex.id}
                className={styles.menuButton}
                onClick={() => {
                  setExampleContent(ex.component);
                }}
              >
                {ex.id}
              </button>
            );
          })}
          <a
            href="#"
            className={[styles["btn-search"], styles["pull-right"]].join(" ")}
          >
            <svg
              fill="#000000"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            Search
          </a>
        </nav>
        <div className={styles.mainContent}>{exampleContent}</div>
      </main>
      <footer id="footer" className={styles.footer}>
        <small>Copyright by Abletech S.r.l.</small>
        <small>Builded by ARXccessibility</small>
      </footer>
    </div>
  );
}
