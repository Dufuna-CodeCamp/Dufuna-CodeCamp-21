import "./index.scss";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import { Input } from "../../components/input/input";
import Navbar from "../../components/navbar/navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { verificationSchema } from "../../utils/schemas/verification";

export const VerificationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(verificationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="verification__page">
      <Navbar />
      <Breadcrumb />
      <h2 className="verification__page--title">Verification</h2>
      <p className="verification__page--subtitle">Confirm address & Payment</p>
      <form
        className="verification__page--form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="address__delivery">
          <div>
            <p className="address__delivery--title">Delivery Address</p>
            <p className="address__delivery--text">
              Your order will be delivered to your address
            </p>
          </div>
          <input
            type="radio"
            name="address"
            className="address__delivery--radio"
          />
        </div>
        <Input
          props={{
            label: "Phone number",
            name: "phoneNumber",
            type: "tel",
            placeholder: "+234",
            register,
            errors,
          }}
        />
        <div className="divider"></div>
        <Input
          props={{
            name: "paymentMethod",
            label: "Payment Method",
            register,
            errors,
          }}
          select={true}
        />
        <Input
          props={{
            label: "Card Number",
            name: "cardNumber",
            type: "text",
            placeholder: "2345 6543 7868 2343",
            register,
            errors,
          }}
        />
        <Input
          props={{
            label: "Card name",
            name: "cardName",
            type: "tel",
            placeholder: "TOLUWALASE KENNY OJO",
            register,
            errors,
          }}
        />
        <div className="expiry__cvc">
          <Input
            props={{
              label: "Expiry date",
              name: "expiryDate",
              type: "text",
              placeholder: "01/23",
              register,
              errors,
            }}
            side="left"
          />
          <Input
            props={{
              label: "CVC",
              name: "cvc",
              type: "text",
              placeholder: "123",
              register,
              errors,
            }}
            side="right"
          />
        </div>
        <Input submit />
      </form>
    </div>
  );
};
