import React from "react";
import styles from "./goods.module.css";
import { goodsList } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

export default function GoodsList() {
  return (
    <div className={styles.goodsWrap}>
      <ul className={styles.wrapList}>
        {goodsList.map((item) => (
          <li key={item.id} className={styles.goodsItem}>
            <Link href={`/${item.slug}`} className={styles.goodsItem}>
              <Image
                alt={item.name}
                src={item.image_1}
                // quality={100}
                className={styles.img}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
