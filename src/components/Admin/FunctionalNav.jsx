import Link from "next/link";
import React from "react";
import styles from "./admin.module.css";

export default function FunctionalNav() {
  return (
    <div className={styles.wrapNav}>
      <Link href="/make/category" className={styles.linkNav}>
        Сторінка категорії
      </Link>
      <Link href="/make" className={styles.linkNav}>
        Сторінка товару
      </Link>
    </div>
  );
}
