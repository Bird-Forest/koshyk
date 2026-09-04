import Image from "next/image";
import React from "react";
import styles from "./item.module.css";
import { goodsList } from "@/data/products";

export default function Produkt({ slug }) {
  const item = goodsList.find((el) => el.slug === slug);

  if (!item) {
    return <div>Товар не знайдено</div>;
  }

  return (
    <div className={styles.wrapItem}>
      <div className={styles.wrapImg}>
        <Image alt={item.name} src={item.image_1} className={styles.imgItem} />
      </div>
      <div className={styles.wrapImg}>
        <Image alt={item.name} src={item.image_2} className={styles.imgItem} />
      </div>
      <ul>
        {item.description.map((el) => (
          <li key={el.idt}>
            <p>{el.em}</p>
            <h4>{el.text}</h4>
          </li>
        ))}
      </ul>
      <div className={styles.wrapImg}>
        <Image alt={item.name} src={item.image_3} className={styles.imgItem} />
      </div>
      <button>Замовити</button>
    </div>
  );
}
