"use client";
import Image from "next/image";
import React from "react";
import styles from "./samples.module.css";
import { useState } from "react";
import UserForm from "../Order/UserForm";

export default function FirstTemplateCard({ item }) {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("білий");

  const onChangeColor = (e) => {
    setSelectedColor(e.target.value);
  };

  const openForm = () => {
    setOpen(true);
  };
  // const closeForm = () => {
  //   setOpen(false);
  // };

  return (
    <div
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
                className={styles.wrapNote}
                style={{ backgroundColor: `${item.primary}` }}
              >
                <p
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

      <div className={styles.slidesBox}>
        <h4 className={styles.noteTitle} style={{ color: `${item.secondary}` }}>
          Обери колір
        </h4>
        <ul className={styles.selectList}>
          {item.select.map((el) => {
            const isSelected = selectedColor === el.color;
            return (
              <li key={el.fill} className={styles.selectWrap}>
                <input
                  type="radio"
                  name="slider"
                  value={el.color}
                  checked={isSelected}
                  onChange={onChangeColor}
                  className={styles.selectInput}
                  style={{ backgroundColor: `${el.fill}` }}
                />
              </li>
            );
          })}
        </ul>
        <ul className={styles.slidesWrap}>
          {item.select.map((el) => {
            const isSelected = selectedColor === el.color;
            return (
              <li
                key={el.fill}
                className={
                  isSelected ? `${styles.wrapper}` : `${styles.wrapperNone}`
                }
              >
                <Image
                  alt={el.color}
                  src={el.img}
                  width={280}
                  height={280}
                  loading="eager"
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.wrapNotes}>
        <h4 className={styles.noteTitle} style={{ color: `${item.secondary}` }}>
          Встигни придбати за ціною
        </h4>
        <p className={styles.value}>{item.price_new}грн</p>
      </div>
      <div className={styles.wrapCall} style={{ color: `${item.secondary}` }}>
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
      <p className={styles.note} style={{ color: `${item.secondary}` }}>
        Пропозиція обмежена*
      </p>
      {open && <UserForm item={item} selectedColor={selectedColor} />}
    </div>
  );
}
