"use client";

import BasicSlider from "./components/BasicSlider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main>
        <h1>Swiper Demo</h1>

        <div className={styles.textWrapper}>
          <h2>基本的なスライダー</h2>
          <div className={styles.option}>
            <b>使用しているオプション：</b>
            <p>Navigation, Pagination, AutoPlay</p>
          </div>
        </div>
        <BasicSlider />
      </main>
    </div>
  );
}
