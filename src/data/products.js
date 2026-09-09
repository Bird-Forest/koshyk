import konstruktor1 from "../../public/konstruktor_1.webp";
import konstruktor2 from "../../public/konstruktor_2.webp";
import { SlPresent } from "react-icons/sl";

export const goodsList = [
  {
    id: 1,
    slug: "konstruktor-poezd-magnetic-82",
    name: "Магнітний конструктор-поїзд Magnetic",
    price_old: 1200,
    price_new: 900,
    discount: "25%",
    icon: <SlPresent />,
    call: "ІДЕАЛЬНИЙ ПОДАРУНОК ДЛЯ ДИТИНИ",
    description: [
      {
        idt: "t1",
        text: " Для дітей від 3 років",
      },
      {
        idt: "t2",
        text: "Розвиває уяву та творчість",
      },
    ],
    image_1: konstruktor1,
    image_2: konstruktor2,
  },
  {
    id: 2,
    slug: "konstruktor-poezd-magnetic-132",
    name: "Магнітний конструктор-поїзд Magnetic",
    price_old: 1100,
    price_new: 2000,
    discount: "25%",
    icon: <SlPresent />,
    call: "ІДЕАЛЬНИЙ ПОДАРУНОК ДЛЯ ДИТИНИ",
    description: [
      {
        idt: "t1",
        text: " Для дітей від 3 років",
      },
      {
        idt: "t2",
        text: "Загальна кількість деталей: 132 шт",
      },
      {
        idt: "t3",
        text: "USB-кабель для зарядки в комплекті ",
      },
    ],
    image_1: konstruktor1,
    image_2: konstruktor2,
  },
];
