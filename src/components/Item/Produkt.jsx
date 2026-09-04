import Image from "next/image";
import React from "react";

export default function Produkt({ item }) {
  return (
    <div>
      <div>
        <Image alt={item.name} src={item.image_1} quality={100} />
      </div>
      <div>
        {" "}
        <Image alt="section hero" src={item.image_2} quality={100} />
      </div>
      <ul>
        {item.description.map((el) => (
          <li key={el.idt}>
            <p>{el.em}</p>
            <h4>{el.text}</h4>
          </li>
        ))}
      </ul>
      <div>
        <Image alt={item.name} src={item.image_3} quality={100} />
      </div>
      <button>Замовити</button>
    </div>
  );
}
