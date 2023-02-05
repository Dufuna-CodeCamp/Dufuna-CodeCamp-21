import * as yup from "yup";

export const verificationSchema = yup.object().shape({
  phoneNumber: yup.string().required("Phone number is required"),
  payment: yup.string().required("Payment is required"),
  cardNumber: yup.string().required("Card number is required"),
  cardName: yup.string().required("Card name is required"),
  expiryDate: yup.string().required("Expiry date is required"),
  cvc: yup.string().required("CVC is required"),
});
