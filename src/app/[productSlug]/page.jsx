import Produkt from "@/components/Item/Produkt";

import React from "react";

export default async function ProduktPage({ params }) {
  const { productSlug } = await params;

  console.log("PAGE", productSlug);
  return (
    <div>
      <Produkt slug={productSlug} />
    </div>
  );
}
