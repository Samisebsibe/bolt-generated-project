import React from 'react';
    import { useParams } from 'react-router-dom';

    function ProductPage() {
      const { id } = useParams();
      // Fetch product details based on the ID
      const product = {
        id: id,
        name: 'Product ' + id,
        price: 49.99,
        image: 'https://via.placeholder.com/300',
        description:
          'This is a sample product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      };

      return (
        <div className="product-page">
          <div className="container">
            <h1>Product Details</h1>
            <div className="product-details">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="thumbnails">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Thumbnail 1"
                  />
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Thumbnail 2"
                  />
                  <img src="https://via.placeholder.com/50" alt="Thumbnail 3" />
                </div>
              </div>
              <div className="product-info">
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <p>Rating: ★★★★☆ (4.5/5)</p>
                <p>{product.description}</p>
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity:</label>
                  <input type="number" id="quantity" defaultValue="1" min="1" />
                  <button>Add to Cart</button>
                  <button>Wishlist</button>
                </div>
                <div className="tabs">
                  <button>Description</button>
                  <button>Reviews</button>
                  <button>Shipping & Returns</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default ProductPage;
