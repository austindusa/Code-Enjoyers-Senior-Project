import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaypalCheckoutButton from './PaypalCheckoutButton';

describe('PaypalCheckoutButton', () => {
  test('initial render and mock PayPal call', async () => {
    render(<PaypalCheckoutButton />);
    const payButton = screen.getByText('Mock PayPal Button');
    fireEvent.click(payButton);
    const successMessage = await screen.findByTestId('success-message');
    expect(successMessage).toHaveTextContent(/Order approved! Order ID: MOCK_ORDER_ID/);
  });
});
