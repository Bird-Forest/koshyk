import React from "react";
import styles from "./home.module.css";
import GoodsLists from "../Goods/GoodsLists";

export default function HomePage() {
  return (
    <div className={styles.bg}>
      <GoodsLists />
    </div>
  );
}
