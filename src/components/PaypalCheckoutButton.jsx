import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaypalCheckoutButton = () => {
  const amount = '1500'; // Example amount
  
  // States
  const [hasAlreadyBoughtSubscription, setHasAlreadyBoughtSubscription] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate checking subscription status
    setHasAlreadyBoughtSubscription(false);
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

  // Render payment details form followed by PayPal button inside a scrollable div
  return (
    <PayPalScriptProvider options={{ "client-id": "REACT_APP_PAYPAL_CLIENT_ID" }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column', // To stack form and button vertically
        justifyContent: 'flex-start', // Align content to the top
        alignItems: 'center',
        position: 'fixed',
        width: '50%', 
        height: '50%',
        top: '25%',
        left: '25%',
        overflow: 'auto', // Enable scrolling
        padding: '20px', // Add some padding around the content
        boxSizing: 'border-box', // Ensure padding does not increase the size of the box
      }}>
        
        <div style={{
          transform: 'scale(1)', // Adjust button size if needed
          transformOrigin: 'center',
        }}>
          <PayPalButtons
            style={{
              layout: "vertical",
              shape: "rect",
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency_code: "USD",
                    value: amount,
                  },
                }],
              });
            }}
            onApprove={async (data, actions) => {
              const order = await actions.order.capture();
              console.log("Order", order);
              alert(`Order approved! Order ID: ${order.id}`);
            }}
            onError={(err) => {
              console.error("PayPal Checkout onError", err);
              setError(err); // Optionally handle error
            }}
          />
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default PaypalCheckoutButton;
