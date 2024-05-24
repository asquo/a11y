"use client";

import styles from "./page.module.css";
import { useMemo, useState } from "react";
import { Demo1, Example1 } from "./example/Example1";
import { Example2 } from "./example/Example2";
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
        component: <Example2 />,
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
        <div className={styles.skipContentContainer} tabIndex={0}>
          <a href="#main" className={styles.skipContentItem}>
            Skip to main content
          </a>
          <a href="#footer" className={styles.skipContentItem}>
            Skip to footer content
          </a>
        </div>
        <div>
          <div>This is the header of ARX11Y app.</div>
          <div>
            <small>
              Try to use TAB from your keyboard to show the skip content element
            </small>
          </div>
        </div>
      </div>
      <main id="main" className={styles.main}>
        <ul className={styles.menuContainer}>
          {exampleList.map((ex) => {
            return (
              <button
                key={ex.id}
                className={styles.example}
                onClick={() => {
                  setExampleContent(ex.component);
                }}
              >
                {ex.id}
              </button>
            );
          })}
        </ul>
        <div className={styles.mainContent}>
          <div>
            <div className={styles.example}>{exampleContent}</div>
          </div>
        </div>
      </main>
      <footer id="footer" className={styles.footer}>
        <small>Copyright by Abletech S.r.l.</small>
        <small>Builded by ARXccessibility</small>
      </footer>
    </div>
  );
}
