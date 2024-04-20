import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { colors } from '../colors';
import { Text } from '@chakra-ui/react';
import logo from "../images/AudiologyLogo.png";
//import { db } from "../../firebase/config";

const PaypalCheckoutButton = ({ testHasAlreadyBought = false }) => {
  const amount = '1'; // Example amount
  //const [user, setUsers] = useState([]);
  
  const [hasAlreadyBoughtSubscription, setHasAlreadyBoughtSubscription] = useState(testHasAlreadyBought);
  const [error, setError] = useState(null);
  //const [checkOutData, setCheckOutData] = useState({subscriber: false});

  useEffect(() => {
    if (!testHasAlreadyBought) {
      setHasAlreadyBoughtSubscription(false);
    }
  }, [testHasAlreadyBought]);

  const imageStyle = {
    height: '3rem',
    width: '21rem',
  };

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
    <div style={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      justifyContent: 'center',
      backgroundColor: colors.background,
      overflow: 'clip'
    }}>
      <div style={{
        display: 'flex',
        width: '45%',
        height: '100%',
        backgroundColor: colors.background,
        flexDirection: 'column',
        boxShadow: '5px 0px 10px rgba(0, 0, 0, 0.2), -5px 0px 10px rgba(0, 0, 0, 0.2), 0px 5px 10px rgba(0, 0, 0, 0.2)',
      }}>
        <div style={{
          backgroundColor: colors.accent,
          width: '100%',
          height: '20%',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '1rem',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            paddingBottom: '2rem',
            overflow: "hidden"
          }}>
            <img src={logo} alt="Logo" style={imageStyle} />
            <Text fontSize='md'>
              By subscribing to our Audiology Membership Plan for just $1 per week, you're unlocking the power of externship reviews.
              Gain unlimited access to valuable feedback from users, empowering you to make an informed decision on the next externship you take. 
            </Text>
            <div style={{ paddingTop: '8px' }}>
              <Text fontSize='md'>
                Ready to elevate your audiology journey? Choose your preferred payment option below.
              </Text>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          width: '100%',
          height: '80%',
          maxHeight: '80%',
          justifyContent: 'center',
          paddingTop: '2rem',
          overflow: 'clip'
        }}>
          <div style={{
            display: 'flex',
            width: '65%',
            height: '85%',
            maxHeight: '85%',
            backgroundColor: colors.background,
            flexDirection: 'column',
            boxShadow: '5px 0px 10px rgba(0, 0, 0, 0.2), -5px 0px 10px rgba(0, 0, 0, 0.2), 0px 5px 10px rgba(0, 0, 0, 0.2)',
            padding: '1.5rem',
            borderTop: '4px solid' + colors.primary,
            overflowY: 'scroll',
            gap: '1rem'
          }}>
            <Text fontSize='2xl'>Payment Method</Text>
            <PayPalScriptProvider options={{ "client-id": "REACT_APP_PAYPAL_CLIENT_ID" }}>
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
                  setError(err);
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaypalCheckoutButton;
