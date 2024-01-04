import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
const Checkout = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
  return (
    <Elements stripe={stripePromise}>
   <CheckoutForm/>
 </Elements>
  );
};

export default Checkout;
