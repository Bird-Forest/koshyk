"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { scheme } from "@/constants/schemeCateory";
import InputText from "../Order/InputText";
import Spinner from "../Helper/Spinner";
import styles from "./admin.module.css";

export default function CreateCategory() {
  // function createAutoIncrement(startValue = 1) {
  //   let count = startValue;
  //   return function () {
  //     return count++;
  //   };
  // }

  // function addElement(arr, element) {
  //   arr.push(element);
  //   return arr;
  // }
  // const fruits = ["яблоко", "банан"];
  // addElement(fruits, "апельсин");
  // console.log(fruits); // ['яблоко', 'банан', 'апельсин']

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(scheme),
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        console.log("CATEGORY", data);
      })}
      className={styles.form}
    >
      <InputText
        name="parent_id"
        placeholder="порядковий номер"
        register={register}
        errors={errors}
      />
      <InputText
        name="name"
        placeholder="назва категорії"
        register={register}
        errors={errors}
      />
      <button
        type="submit"
        // isSubmitting={isSubmitting}
        // disabled={isSubmitting}
        className={styles.btnSubmit}
      >
        {isSubmitting ? <Spinner /> : "відправити"}
      </button>
    </form>
  );
}
