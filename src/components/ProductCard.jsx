import React from 'react';
    import { Link } from 'react-router-dom';

    function ProductCard({ product }) {
      return (
        <div className="product-card">
          <img src={product.image} alt={product.name} style={{ maxWidth: '100px' }} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button>Add to Cart</button>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      );
    }

    export default ProductCard;
