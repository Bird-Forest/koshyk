"use client";

import React from "react";
import { useState } from "react";
import styles from "./admin.module.css";
import CreateProduct from "./CreateProduct";
import UpdatetProduct from "./UpdateProduct";

export default function ControlProduct() {
  const [openCreate, setOpenCreate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  return (
    <div className={styles.wrapControl}>
      <button
        type="button"
        onClick={() => setOpenCreate(!openCreate)}
        className={styles.btnOpen}
      >
        Створити
      </button>
      <>{openCreate ? <CreateProduct /> : ""}</>
      <button
        type="button"
        onClick={() => setOpenUpdate(!openUpdate)}
        className={styles.btnOpen}
      >
        Редагувати
      </button>

      <>{openUpdate ? <UpdatetProduct /> : ""}</>
    </div>
  );
}
