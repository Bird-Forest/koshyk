import styles from "../page.module.css";
import React from "react";
import FirstTemplateCard from "@/components/Samples/FirstTemplateCard";
import SecondTemplateCard from "@/components/Samples/SecondTemplateCard";
import { allProducts } from "@/data/products";
import HeaderLanding from "@/components/Header/HeaderLanding";

const TEMPLATES = {
  1: FirstTemplateCard,
  2: SecondTemplateCard,
};

export default async function ProduktPage({ params }) {
  const { productSlug } = await params;
  // console.log(productSlug);
  // 1. Находим товар в общем массиве
  const product = allProducts.find((item) => item.slug === productSlug);

  if (!product) {
    return <div>Товар не знайдено</div>;
  }

  // 2. Выбираем компонент шаблона по номеру (по умолчанию - 1)
  const TemplateComponent = TEMPLATES[product.template] || FirstTemplateCard;

  return (
    <section className={styles.landing}>
      <HeaderLanding />
      <TemplateComponent item={product} />
    </section>
  );
}
