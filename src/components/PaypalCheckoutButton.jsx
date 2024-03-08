import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaypalCheckoutButton = () => {
  // Define the amount to charge
  const amount = '1500'; // Example amount

  return (
    <PayPalScriptProvider options={{ "client-id": "REACT_APP_PAYPAL_CLIENT_ID" }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150vh',
        width: '150vw',
        position: 'fixed',
        width: '100%',
        height: '70%',
        top: 0,
        left: 0,
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
                  value: amount, // Use the amount defined above
                },
              }],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PaypalCheckoutButton;
