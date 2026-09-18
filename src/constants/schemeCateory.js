import * as Yup from "yup";

export const scheme = Yup.object({
  name: Yup.string().min(3).required("поле обов'язкове"),
  parent_id: Yup.number("поле обов'язкове").required().positive().integer(),
}).required();
