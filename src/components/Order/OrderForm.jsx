"use client";
import React from "react";
import { useState } from "react";
import styles from "./order.module.css";
import { redirect } from "next/navigation";

const messengers = [
  { id: 1, value: "Viber", bgClass: styles.viber },
  { id: 2, value: "Telegram", bgClass: styles.telegram },
  { id: 1, value: " Whatsapp", bgClass: styles.whatsapp },
];

// const title = /^(\\+38)?0[0-9]{9}$/;

export default function OrderForm({ item }) {
  const [loading, setLoading] = useState(false);

  // const validationSchema = Yup.object({
  //   name: Yup.string().trim().min(3).required("має бути не менше 3 символів"),
  //   phone: Yup.string()
  //     .matches(regexp, "10 цифр, починаючи з 0")
  //     .required("не вірно вказаний номер телефону"),
  //   messenger: Yup.array()
  //     .of(Yup.string())
  //     .min(1, "оберіть мессенджер для зв'язку"),
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const orderData = {
      productId: item.id,
      productName: item.name,
      price: item.price_new,
      name: formData.get("name"),
      phone: formData.get("phone"),
      messenger: formData.get("messenger"),
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // Перенаправляем на страницу спасибо
        // window.location.href = "/thanks";
        redirect(`/thanks`);
      } else {
        alert("Помилка при оформленні замовлення. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error("Помилка мережі", error);
    } finally {
      setLoading(false);
    }
    console.log(orderData);
  };
  return (
    <div className={styles.formWrapper} id="order-form">
      {/* <h2>Оформлення замовлення</h2> */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <ul className={styles.boxRadio}>
          {messengers.map((el, i) => (
            <li key={i} className={styles.wrapRadio}>
              <input
                type="radio"
                name="messenger"
                value={el.value}
                className={`${styles.inputRadio} ${el.bgClass}`}
              />
            </li>
          ))}
        </ul>
        <p>оберіть спосіб зв&#699;язку </p>
        <input
          type="text"
          name="name"
          minLength={3}
          placeholder="Ваше ім'я"
          className={styles.inputText}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Ваш номер телефону"
          className={styles.inputText}
          minLength={10}
          maxLength={10}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={styles.btnSubmit}
          style={{ color: `${item.primary}` }}
        >
          {loading ? "Відправка..." : "Я таке хочу"}
        </button>
      </form>
    </div>
  );
}

// оберіть спосіб зв&#699;язку
