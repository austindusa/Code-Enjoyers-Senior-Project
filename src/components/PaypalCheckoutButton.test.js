import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaypalCheckoutButton from './PaypalCheckoutButton';

jest.mock('@paypal/react-paypal-js', () => ({
  PayPalScriptProvider: ({ children }) => <div>{children}</div>,
  PayPalButtons: ({ createOrder, onApprove, onError }) => (
    <button onClick={() => {
      const actions = {
        order: {
          capture: () => Promise.resolve({ id: 'order123', status: 'COMPLETED' })
        }
      };
      createOrder && createOrder().then(() => onApprove({ orderID: 'test_order_id', actions }));
    }}>Mock PayPal Button</button>
  )
}));

describe('PaypalCheckoutButton', () => {
  test('renders PayPal buttons and subscription info if not purchased', async () => {
    render(<PaypalCheckoutButton />);
    expect(screen.getByText(/unlocking the power of externship reviews/)).toBeInTheDocument();
    expect(screen.getByText('Mock PayPal Button')).toBeInTheDocument();
  });

  test('displays already purchased message if subscription is bought', () => {
    render(<PaypalCheckoutButton testHasAlreadyBought={true} />);
    expect(screen.getByText('You already bought the subscription, please go to your account.')).toBeInTheDocument();
  });

  test('creates an order on PayPal when button is clicked', async () => {
    render(<PaypalCheckoutButton />);
    fireEvent.click(screen.getByText('Mock PayPal Button'));
    // Simulate order creation
    const createOrderMock = jest.fn().mockReturnValue({
      then: jest.fn().mockImplementation(callback => callback({ id: 'order123' }))
    });
    expect(createOrderMock).toHaveBeenCalled();
  });

  test('handles approval correctly', async () => {
    render(<PaypalCheckoutButton />);
    fireEvent.click(screen.getByText('Mock PayPal Button'));
    await screen.findByText('Order approved! Order ID: test_order_id');
    expect(screen.getByText('Order approved! Order ID: test_order_id')).toBeInTheDocument();
  });

  test('displays an error message when an error occurs', async () => {
    render(<PaypalCheckoutButton />);
    fireEvent.click(screen.getByText('Mock PayPal Button'));
    // Assuming you add a mechanism to display the error message in your component
    await screen.findByText('PayPal Checkout onError');
    expect(screen.getByText('PayPal Checkout onError')).toBeInTheDocument();
  });
});
