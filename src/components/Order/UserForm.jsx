"use client";
import React from "react";
// import { useState } from "react";
import styles from "./order.module.css";
// import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { scheme } from "@/constants/schemeUser";
import InputText from "./InputText";
import InputRadio from "./InputRadio";
import Spinner from "../Helper/Spinner";
import { useRouter } from "next/navigation";

const messengers = [
  { id: 1, value: "Viber", bgClass: styles.viber },
  { id: 2, value: "Telegram", bgClass: styles.telegram },
  { id: 1, value: " Whatsapp", bgClass: styles.whatsapp },
];

export default function UserForm({ item }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(scheme),
  });

  const myFunction = () => {
    router.push(`${item.slug}/than`);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => console.log("USER", data))}
      id="order-form"
      className={styles.form}
    >
      <InputRadio
        type="radio"
        name="messenger"
        arr={messengers}
        register={register}
        errors={errors}
      />
      <InputText
        name="user"
        placeholder="Ваше ім'я"
        register={register}
        errors={errors}
      />
      <InputText
        name="phone"
        placeholder="Ваш номер телефону"
        register={register}
        errors={errors}
      />
      {/* <button
        type="submit"
        disabled={isSubmitting || !isDirty || !isValid}
        className={styles.btnSubmit}
        style={{ color: `${item.primary}` }}
      >
        {isSubmitting ? <Spinner /> : "Я це хочу"}
      </button> */}
      <button
        type="button"
        onClick={myFunction}
        className={styles.btnSubmit}
        style={{ color: `${item.primary}` }}
      >
        THANKS
      </button>
    </form>
  );
}
