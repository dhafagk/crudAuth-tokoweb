import * as Yup from "yup";

const LoginSchemaValidation = Yup.object()
  .shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(3, "Password must be at least 3 characters long"),
  })
  .required();

export { LoginSchemaValidation };
