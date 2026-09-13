import Image from "next/image";
import React from "react";
import smile from "../../../public/icons/thanks.webp";
import styles from "./helper.module.css";

export default function Gratitude() {
  return (
    <div className={styles.thankWrap}>
      <div className={styles.thankBox}>
        <Image
          src={smile}
          alt="Емодзі посміхається, задоволений"
          width={280}
          height={280}
          loading="eager"
        />
        <h4 className={styles.thankTitle}>Дякуєм!</h4>
      </div>
      <p className={styles.thinkText}>
        Найближчим часом ми з Вами звʼяжемося через вказаний месенджер
      </p>
    </div>
  );
}
