import * as Yup from "yup";

export const scheme = Yup.object({
  user: Yup.string()
    .min(3, "мінімум три символи")
    .trim()
    .required("поле обов'язкове"),
  phone: Yup.string()
    .matches(/^0\d{9}$/, "приклад: 0937774422")
    .trim()
    .required("поле обов'язкове"),
  messenger: Yup.string().required("зробіть вибір"),
}).required();
