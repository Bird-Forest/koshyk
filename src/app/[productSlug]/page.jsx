import Produkt from "@/components/Item/Produkt";
import styles from "../page.module.css";
import React from "react";

export default async function ProduktPage({ params }) {
  const { productSlug } = await params;

  return (
    <div className={styles.main}>
      <Produkt slug={productSlug} />
    </div>
  );
}
