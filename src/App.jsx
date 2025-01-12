import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import Home from './pages/Home';
    import ProductPage from './pages/ProductPage';
    import CartPage from './pages/CartPage';
    import CheckoutPage from './pages/CheckoutPage';
    import CategoryPage from './pages/CategoryPage';
    import LoginPage from './pages/LoginPage';

    function App() {
      return (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Footer />
        </>
      );
    }

    export default App;
