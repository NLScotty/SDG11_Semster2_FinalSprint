import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/pages/ProductDetails';
import ProductList from './components/pages/ProductList';

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