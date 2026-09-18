import * as Yup from "yup";

export const scheme = Yup.object({
  category_id: Yup.number().required("поле обов'язкове").positive().integer(),
  name: Yup.string().min(3).required("поле обов'язкове"),
  currency_code: Yup.string().required("поле обов'язкове"),
  price: Yup.number().positive().required("поле обов'язкове"),
  unit_type: Yup.string().required("поле обов'язкове"),
  picture: Yup.string().url().required("поле обов'язкове"),
}).required();
