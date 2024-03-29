import styles from "./page.module.css";
import { Example1 } from "./example/Example1";
import { Example2 } from "./example/Example2";
import { Example3 } from "./example/Example3";
import { Example4 } from "./example/Example4";
import { Example5 } from "./example/Example5";

export default function Home() {
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
        <div>This is the main content</div>
        <div className={styles.example}>{<Example1 />}</div>
        <div className={styles.example}>{<Example2 />}</div>
        <div className={styles.example}>{<Example3 />}</div>
        <div className={styles.example}>{<Example4 />}</div>
        <div className={styles.example}>{<Example5 />}</div>
      </main>
      <footer id="footer" className={styles.footer}>
        <small>Copyright by Abletech S.r.l.</small>
        <small>Builded by ARXccessibility</small>
      </footer>
    </div>
  );
}
