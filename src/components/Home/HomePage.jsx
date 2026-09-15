import React from "react";
import styles from "./goods.module.css";
import GoodsLists from "./GoodsLists";

export default function HomePage() {
  return (
    <div className={styles.goodsWrap}>
      <GoodsLists />
    </div>
  );
}
