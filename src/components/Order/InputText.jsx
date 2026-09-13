"use client";
import React from "react";
import styles from "./order.module.css";

export default function InputText({ register, name, placeholder, errors }) {
  return (
    <label className={styles.boxInput}>
      <input
        placeholder={placeholder}
        {...register(name)}
        className={styles.inputText}
      />
      <p className={styles.error}>{errors?.[name]?.message}</p>
    </label>
  );
}
