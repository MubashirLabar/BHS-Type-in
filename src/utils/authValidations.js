import * as Yup from "yup";

export const loginValidation = Yup.object({
  email: Yup.string()
    .email("Email is invalid")
    .required("Username is required"),
  password: Yup.string().required("Password is required"),
});
