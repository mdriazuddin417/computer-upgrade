import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import fetcher from "../../../api/fetcher";
const CheckoutForm = ({ price, user, id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetcher.post("/create-payment-intent", { price }).then((res) => {
      if (res.data?.clientSecret) {
        setClientSecret(res.data.clientSecret);
      } else {
        setLoading(false);
      }
    });
  }, [price]);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      setLoading(false);
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error?.message);
      toast.error(error?.message);
      setLoading(false);
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      toast.error(intentError?.message);
      setSuccess("");
      setLoading(false);
    } else {
      toast.success(`Congrats ! Your payment is completed.`);
      setCardError("");
      setSuccess(`Transaction Id: ${paymentIntent.id}`);
      setLoading(false);

      //payment
      const payment = {
        name: user?.displayName,
        email: user?.email,
        transactionId: paymentIntent?.id,
      };

      //Update
      await fetcher
        .patch(`/order/${id}`, { payment: "pending" })
        .then((res) => {});
      //payment
      await fetcher.patch(`/payment`, payment).then((res) => {});
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className={
          loading
            ? "btn btn-success mt-5 btn-sm loading"
            : "btn btn-success mt-5 btn-sm"
        }
        type="submit"
        disabled={!stripe && !clientSecret}
      >
        Pay
      </button>
      {cardError && <p className="text-red-500 mt-2">{cardError}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </form>
  );
};

export default CheckoutForm;
