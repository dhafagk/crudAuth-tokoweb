import * as Yup from "yup";

export const ProductSchemaValidation = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  price: Yup.number().required("Price is required"),
});
