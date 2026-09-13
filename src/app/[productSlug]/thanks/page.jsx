import Gratitude from "@/components/Helper/Gratitude";
import React from "react";
import styles from "../../page.module.css";

export default function ThanksPage() {
  return (
    <section className={styles.landing}>
      <Gratitude />
    </section>
  );
}
