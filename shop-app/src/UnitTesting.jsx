import { fireEvent, render, screen } from '@testing-library/react';
import Checkout from './Checkout';
import { ShoppingCartProvider } from './ShoppingCartContext';

describe('Checkout Component', () => {
    test('renders checkout form', () => {
        render(
            <ShoppingCartProvider>
                <Checkout />
            </ShoppingCartProvider>
        );
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/credit card number/i)).toBeInTheDocument();
    });

    test('submits form with user data', () => {
        render(
            <ShoppingCartProvider>
                <Checkout />
            </ShoppingCartProvider>
        );
        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/address/i), { target: { value: '123 Main St' } });
        fireEvent.change(screen.getByLabelText(/credit card number/i), { target: { value: '1234567890123456' } });
        fireEvent.click(screen.getByText(/submit order/i));
        expect(screen.getByLabelText(/name/i).value).toBe('John Doe');
        // Add more assertions as necessary
    });
});
