"use client";
import Image from "next/image";
import React from "react";
import styles from "./first.module.css";
import OrderForm from "../Order/OrderForm";
import { useState } from "react";
import UserForm from "../Order/UserForm";

export default function FirstTemplateCard({ item }) {
  const [open, setOpen] = useState(false);

  const openForm = () => {
    setOpen(true);
  };
  const closeForm = () => {
    setOpen(false);
  };

  return (
    <div
      // className={`${styles.wrapItem} ${styles.bgBlue}`}
      className={styles.wrapItem}
      style={{ backgroundColor: `${item.primary}` }}
    >
      <div className={styles.wrapImg}>
        <Image
          alt={item.name}
          src={item.image_1}
          width={480}
          height={480}
          loading="eager"
          className={styles.imgBasic}
        />
      </div>
      <div className={styles.wrapNotes}>
        <Image
          alt={item.name}
          src={item.image_2}
          width={480}
          height={480}
          loading="eager"
          className={styles.imgBasic}
        />
        <div className={styles.notes}>
          <div className={styles.discount}>
            <h3>ЗНИЖКА</h3>
            <p>{item.discount}</p>
          </div>
          <ul className={styles.noteList}>
            {item.description.map((el) => (
              <li
                key={el.idt}
                // className={`${styles.wrapNote} ${styles.bgBlue}`}
                className={styles.wrapNote}
                style={{ backgroundColor: `${item.primary}` }}
              >
                <p
                  // className={`${styles.note} ${styles.fontWhite}`}
                  className={styles.note}
                  style={{ color: `${item.secondary}` }}
                >
                  {el.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.wrapNotes}>
        <h4
          // className={`${styles.noteTitle} ${styles.fontWhite}`}
          className={styles.noteTitle}
          style={{ color: `${item.secondary}` }}
        >
          Встигни придбати за ціною
        </h4>
        <p className={styles.value}>{item.price_new}грн</p>
      </div>
      <div
        // className={`${styles.wrapCall} ${styles.fontWhite}`}
        className={styles.wrapCall}
        style={{ color: `${item.secondary}` }}
      >
        <span className={styles.icon}>{item.icon}</span>
        <h4 className={styles.call}>{item.call}</h4>
      </div>

      <a
        href="#order-form"
        onClick={openForm}
        className={styles.btnOrder}
        style={{ color: `${item.primary}` }}
      >
        Замовити
      </a>
      <p
        // className={`${styles.note} ${styles.fontWhite}`}
        className={styles.note}
        style={{ color: `${item.secondary}` }}
      >
        Пропозиція обмежена*
      </p>
      {/* {open && <OrderForm item={item} />} */}
      {open && <UserForm item={item} />}
    </div>
  );
}
