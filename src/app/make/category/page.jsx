import CreateCategory from "@/components/Admin/CreateCategory";
import React from "react";
import styles from "../../page.module.css";

export default function CategoryPage() {
  return (
    <section className={styles.landing}>
      <h3 className={styles.title}>Сторінка категорії</h3>
      <CreateCategory />
    </section>
  );
}
