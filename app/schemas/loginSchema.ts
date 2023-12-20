import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Email or Username is required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Required password"),
});





export const contactFormSchema = Yup.object().shape({


 name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(
      /^(?:\+88|01)?\d{11}$/,
      "Invalid  phone number"
    )
    .required("Phone number is required"),

  message: Yup.string()
    .min(5, "Too Short!")
    .max(100, "Too Long!")
    .required("Message is required"),
});
