import Image from "next/image";
import React from "react";
import styles from "./first.module.css";
import { allProducts } from "@/data/products";

export default function SecondTemplateCard({ slug }) {
  const item = allProducts.find((el) => el.slug === slug);

  if (!item) {
    return <div>Товар не знайдено</div>;
  }

  return (
    <div className={styles.wrapItem}>
      <div className={styles.wrapImg}>
        <Image alt={item.name} src={item.image_1} className={styles.imgBasic} />
      </div>
      <div className={styles.wrapNotes}>
        <Image alt={item.name} src={item.image_2} className={styles.imgBasic} />
        <div className={styles.notes}>
          <div className={styles.discount}>
            <h3>ЗНИЖКА</h3>
            <p className={styles.value}>{item.discount}</p>
          </div>
          <ul className={styles.noteList}>
            {item.description.map((el) => (
              <li key={el.idt} className={styles.wrapNote}>
                <h4 className={styles.note}>{el.text}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.wrapNotes}>
        <h4 className={styles.noteTitle}>Встигни придбати за ціною</h4>
        <p className={styles.value}>{item.price_new}грн</p>
      </div>
      <div className={styles.wrapCall}>
        <span className={styles.icon}>{item.icon}</span>
        <h4 className={styles.call}>{item.call}</h4>
      </div>
      <p className={styles.note}>Пропозиція обмежена*</p>
    </div>
  );
}
