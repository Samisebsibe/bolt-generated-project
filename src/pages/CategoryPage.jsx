import React from 'react';
    import { useParams } from 'react-router-dom';
    import ProductCard from '../components/ProductCard';

    const products = [
      {
        id: 1,
        name: 'Product 1',
        price: 19.99,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 29.99,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 3,
        name: 'Product 3',
        price: 39.99,
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 4,
        name: 'Product 4',
        price: 49.99,
        image: 'https://via.placeholder.com/150',
      },
    ];

    function CategoryPage() {
      const { name } = useParams();
      return (
        <div className="category-page">
          <div className="container">
            <h1>{name}</h1>
            <div className="category-content">
              <div className="filters">
                <h2>Filters</h2>
                <p>Price</p>
                <p>Size</p>
                <p>Color</p>
                <p>Brand</p>
                <p>Rating</p>
              </div>
              <div className="product-grid">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default CategoryPage;
