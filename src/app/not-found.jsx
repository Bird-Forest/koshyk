import React from "react";
import styles from "./page.module.css";
import NotFoundPage from "@/components/Helper/NotFoundPage";

export default function NotFound() {
  return (
    <section className={styles.landing}>
      <NotFoundPage />
    </section>
  );
}
