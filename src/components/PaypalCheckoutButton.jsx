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
          // Handle the transaction success
        });
      },
    }).render('#paypal-button-container');
  }, []);

  return (
    <div style={{
      display: 'flex', // Use flex to enable flexbox for this container
      justifyContent: 'center', // Center children horizontally
      alignItems: 'center', // Center children vertically
      height: '100vh', // Take up the full viewport height
      width: '100vw', // Take up the full viewport width
      position: 'fixed', // Use fixed to make it stay in place even on scroll
      top: 0, // Align the top edge with the viewport
      left: 0, // Align the left edge with the viewport
    }}>
      <div id="paypal-button-container" style={{
        width: 'auto', // Width of the PayPal button will be determined by its content
        padding: '20px', // Add some padding around the PayPal button for spacing
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Optional: add a shadow for better visibility
        borderRadius: '4px', // Optional: round the corners of the container
        backgroundColor: 'white', // Optional: change the background color if needed
      }}></div>
    </div>
  );
};

export default PaypalCheckoutButton;
