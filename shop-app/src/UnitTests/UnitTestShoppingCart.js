import { render, screen } from '@testing-library/react';
import React from 'react';
import { ShoppingCartProvider } from './path/to/ShoppingCartContext';
import ShoppingCartPage from './path/to/ShoppingCartPage';

describe('ShoppingCartPage', () => {
    test('renders shopping cart page', () => {
        render(
            <ShoppingCartProvider>
                <ShoppingCartPage />
            </ShoppingCartProvider>
        );
        expect(screen.getByText(/Product Name/)).toBeInTheDocument();
        expect(screen.getByText(/Product Quantity/)).toBeInTheDocument();
        expect(screen.getByText(/Product Price/)).toBeInTheDocument();
        expect(screen.getByText(/Total Price/)).toBeInTheDocument();
        expect(screen.getByText(/Product 1/)).toBeInTheDocument();
        expect(screen.getByText(/Product 5/)).toBeInTheDocument();
    });
  
  });