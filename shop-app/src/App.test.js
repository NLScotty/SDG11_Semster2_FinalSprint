import '@testing-library/jest-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/pages/ProductDetails';
import ProductList from './components/pages/ProductList';
import Checkout from './components/pages/Checkout';
import { ShoppingCartProvider, ShoppingCartPage } from './components/pages/Shoppingcart';

// Tests For Product Details Page

// test that checks if we can get an item from the database for the product details page

test('Display ', async() => {
    const response = await fetch(`http://localhost:5000/products/1`)
    const pro1 = await response.json()
    render(
        <MemoryRouter initialEntries={['/product/1']}>
            <Routes>
              <Route path="/product/:id" element={<ProductDetails/>}></Route>
            </Routes>
        </MemoryRouter>
    );
    // wait for screen to render (I'm interested in a better way to do this if you know of one)
    await waitFor(()=>expect(screen.getByText(pro1.name)))
    expect(screen.getByText(pro1.name)).toBeInTheDocument()
});

// Tests For Product List Page

// test that checks if we rendered the product page with the items from the database.

test('Products Page', async() => {
  const response = await fetch(`http://localhost:5000/products`)
  const data = await response.json()
  render(
    <MemoryRouter initialEntries={['/list']}>
      <Routes>
        <Route path="/list" element={<ProductList/>}></Route>
      </Routes>
    </MemoryRouter>
  );
  // wait for screen to render
  await waitFor(()=>expect(screen.getByText(data[0].name)))
  //we then check for each product
  data.forEach(product => {
    expect(screen.getByText(product.name)).toBeInTheDocument()
  });
});

// Tests For Checkout

describe('Checkout', () => {
  const testStorage = [{"id":1,"name":"Product 1","price":10,"qty":2},{"id":5,"name":"Product 5","price":20,"qty":2}];

  //set json object to storage 
  localStorage.setItem("cart", JSON.stringify(testStorage));


  test('renders checkout form', () => {
      render(<Checkout />);
      expect(screen.getByPlaceholderText(/Name/)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/Address/)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/Credit Card Number/)).toBeInTheDocument();
  });

  test('allows form field updates', () => {
      render(<Checkout />);
      fireEvent.change(screen.getByPlaceholderText(/Name/), { target: { value: 'John Doe' } });
      expect(screen.getByPlaceholderText(/Name/).value).toBe('John Doe');
  });

  test('shows total amount from cart items', () => {
      // Mock useLocalStorage or pass mock data
      render(<Checkout />);
      // Assuming you have a way to display total, check if it's rendered correctly
      // e.g., expect(screen.getByText(/Total Amount:/)).toBeInTheDocument();
  });

});

// Tests for the Shopping Cart

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
