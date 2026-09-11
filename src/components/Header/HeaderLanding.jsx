import React from "react";
import styles from "./header.module.css";
import logo from "../../../public/icons/logo.webp";
import Image from "next/image";

export default function HeaderLanding() {
  return (
    <header className={styles.wrapHead}>
      <div className={styles.header}>
        <Image alt="logo" src={logo} className={styles.imgLogo} />
        <p className={styles.title}>онлайн-кошик</p>
      </div>
    </header>
  );
}
