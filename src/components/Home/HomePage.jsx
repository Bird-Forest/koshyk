import React from "react";
import styles from "./home.module.css";
import GoodsList from "../Goods/GoodsList";

export default function HomePage() {
  return (
    <div className={styles.bg}>
      <GoodsList />
    </div>
  );
}
