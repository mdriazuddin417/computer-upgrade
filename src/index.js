import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
const stripePromise = loadStripe(
  "pk_test_51L1CCDGNqDr1x0jXcYpwSFklaIzKeC9Pb0pOtHrkrrz8YpJ7GBWF0HxHpkG4XTLa03KLuTSe9dyrFu2sBzc6bpzl00RrPYFQYv"
);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <React.StrictMode>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </React.StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
