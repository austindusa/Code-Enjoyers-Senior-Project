import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaypalCheckoutButton = () => {
  const amount = '1500'; // Example amount
  
  // States
  const [hasAlreadyBoughtSubscription, setHasAlreadyBoughtSubscription] = useState(false);
  const [error, setError] = useState(null); // New state for storing errors

  const checkSubscriptionStatus = async () => {
    // Simulate checking subscription status
    const status = false; // Example status, set to true if they have the subscription
    setHasAlreadyBoughtSubscription(status);
  };

  const handleApprove = (orderId) => {
    console.log("Order approved! Order ID:", orderId);
    // Updating UI or calling your backend
    alert(`Order approved! Order ID: ${orderId}`);
  };

  useEffect(() => {
    checkSubscriptionStatus();
  }, []);

  if (hasAlreadyBoughtSubscription) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
      }}>
        You already bought the subscription, please go to your account.
      </div>
    );
  }
  return (
    <PayPalScriptProvider options={{ "client-id": "REACT_APP_PAYPAL_CLIENT_ID" }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        width: '100%', // Fill the width of the viewport
        height: '100%', // Fill the height of the viewport
        top: 0,
        left: 0,
        
      }}>
        {/* Wrapper div to scale the PayPal button */}
        <div style={{
          transform: 'scale(1.5)', // Adjust this value to increase or decrease the button size
          transformOrigin: 'center', // Ensure the button scales from its center
        }}>
          <PayPalButtons
            style={{
              layout: "vertical",
              shape: "rect",
              // The size of the button cannot be directly controlled via the style prop
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency_code: "USD",
                    value: amount, // Use the amount defined above
                  },
                }],
              });
            }}
            onApprove={async (data, actions) => {
              const order = await actions.order.capture();
              console.log("Order", order);
              // Handle order approval
            }}
            onError={(err) => {
              console.error("PayPal Checkout onError", err);
              // Handle errors
            }}
          />
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default PaypalCheckoutButton;
