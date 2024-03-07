// PaypalCheckoutButton

import React, { useEffect, useRef } from "react";

const PaypalCheckoutButton = () => {
  const paypalButtonContainerRef = useRef(null);

  useEffect(() => {
    if (window.paypal && paypalButtonContainerRef.current && !paypalButtonContainerRef.current.hasChildNodes()) {
      // Initialize PayPal Buttons
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '1500', // Set the amount here
              },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert('Transaction completed by ' + details.payer.name.given_name); // Transaction success logic
          });
        },
      }).render(paypalButtonContainerRef.current); // Render in the ref's current element
    }
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      
    }}>
      <div ref={paypalButtonContainerRef} style={{
        width: '30%',
        height: '70%',
        padding: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        backgroundColor: 'white',
        
      }}></div>
    </div>
  );
};

export default PaypalCheckoutButton;
