// PaypalCheckoutButton

import React, { useEffect } from "react";

const PaypalCheckoutButton = () => {
  useEffect(() => {
    window.paypal.Buttons({
      // Set up the transaction
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '1500', // Can dynamically set the value based on the product or service
            },
          }],
        });
      },
      // Finalize the transaction
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          alert('Transaction completed by ' + details.payer.name.given_name);
          // Handle the transaction success, such as updating your database or redirecting to a success page
        });
      },
    }).render('#paypal-button-container');
  }, []);

  return (
    <div>
      <div id="paypal-button-container"></div>
    </div>
  );
};

export default PaypalCheckoutButton;
