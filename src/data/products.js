// import konstruktor1 from "../../public/konstruktor_1.webp";
// import konstruktor2 from "../../public/konstruktor_2.webp";
import { SlPresent } from "react-icons/sl";
import { FaThumbsUp } from "react-icons/fa6";
import { BsHouseHeart } from "react-icons/bs";

export const allProducts = [
  {
    id: 101001,
    template: 1,
    slug: "konstruktor-poezd-magnetic-82",
    name: "Магнітний конструктор-поїзд Magnetic",
    price: "1200 грн",
    price_new: "900 грн",
    discount: "25%",
    icon: <SlPresent />,
    call: "ЗДИВУЙ ДИТИНУ!",
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
    image_1: "/konstruktor/konstruktor82_1.webp",
    image_2: "/konstruktor/konstruktor82_2.webp",
    primary: "#2a5b9c",
    secondary: "#ffffff",
  },
  {
    id: 101002,
    template: 2,
    slug: "pristavnoj-stolik-na-kolesikax-kompyuternyj",
    name: "Приставний столик на колесиках G-50",
    price: "1000 грн",
    price_new: "750 грн",
    discount: "25%",
    icon: <FaThumbsUp />,
    call: "ПРОСТО НЕОБХІДНА РІЧ!",
    description: [
      {
        idt: "t1",
        text: "Компактне і зручне рішення",
      },
      {
        idt: "t2",
        text: "Для повсякденного використання",
      },
      {
        idt: "t3",
        text: "Розмір стільниці 30х50",
      },
    ],
    select: [
      {
        color: "білий",
        fill: "#ffffff",
        img: "/furniture/stolik-g-50-white.webp",
      },
      {
        color: "чорний",
        fill: "#000000",
        img: "/furniture/stolik-g-50-black.webp",
      },
    ],
    image_1: "/furniture/stolik-g-50-w-tags.webp",
    image_2: "/furniture/stolik-g-50.webp",
    primary: "#917f6c",
    secondary: "#ffffff",
  },
  {
    id: 102003,
    template: 1,
    slug: "dvojnaya-veshalka-dlya-odygu",
    name: "Підлогова вішалка-стійка для одягу",
    price: "1200 грн",
    price_new: "720 грн",
    discount: "40%",
    icon: <BsHouseHeart />,
    call: "ПОРЯДОК І СТИЛЬ!",
    description: [
      {
        idt: "t1",
        text: "Функціональність та стильний дизайн",
      },
      {
        idt: "t2",
        text: "Організація зберігання одягу та взуття ",
      },
      {
        idt: "t3",
        text: "Висота-164см, ширина-137см, глибина-26см ",
      },
    ],
    image_1: "/furniture/veshalka-tags.webp",
    image_2: "/furniture/veshalka-stojka.webp",
    primary: "#393736",
    secondary: "#ffffff",
  },
];
