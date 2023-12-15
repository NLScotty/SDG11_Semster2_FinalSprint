import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/pages/ProductDetails';
import ProductList from './components/pages/ProductList';

// Might plan on redoing the test to fetch the first product/all products. then check to see if thier attributes match on what is on the page

// test that checks if we can get an item from the database for the product details page
test('Display ', async() => {
    render(
        <MemoryRouter initialEntries={['/product/1']}>
            <Routes>
              <Route path="/product/:id" element={<ProductDetails/>}></Route>
            </Routes>
        </MemoryRouter>
    );
    await waitFor(()=>expect(screen.getByText("Product 1")))
    expect(screen.getByText("Product 1")).toBeInTheDocument()
});

// test that checks if we rendered the product page

test('Products Page', async() => {
  render(
    <MemoryRouter initialEntries={['/list']}>
      <Routes>
        <Route path="/list" element={<ProductList/>}></Route>
      </Routes>
    </MemoryRouter>
  );
  await waitFor(()=>expect(screen.getByText("Product 1")))
  expect(screen.getByText("Product 1")).toBeInTheDocument()
});