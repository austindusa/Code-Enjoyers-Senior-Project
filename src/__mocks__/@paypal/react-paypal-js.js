

jest.mock('@paypal/react-paypal-js', () => ({
  PayPalScriptProvider: ({ children }) => <div>{children}</div>,
  PayPalButtons: () => <button>Pay with PayPal</button>
}));
