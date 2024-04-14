
 
  import React from 'react';

const PayPalButtons = ({ createOrder, onApprove, onError }) => (
  <button onClick={() => onApprove({
    orderID: 'MOCK_ORDER_ID',
    actions: {
      order: {
        capture: () => Promise.resolve({ id: 'MOCK_ORDER_ID' })
      }
    }
  })}>Mock PayPal Button</button>
);
const PayPalScriptProvider = ({ children }) => <div>{children}</div>;

export { PayPalButtons, PayPalScriptProvider };
