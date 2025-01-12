import React from 'react';
    import ProductCard from '../components/ProductCard';

    const products = [
      {
        id: 1,
        name: 'Elegant Abaya',
        price: 79.99,
        image: 'https://via.placeholder.com/250',
      },
      {
        id: 2,
        name: 'Stylish Hijab',
        price: 29.99,
        image: 'https://via.placeholder.com/250',
      },
      {
        id: 3,
        name: 'Modest Dress',
        price: 69.99,
        image: 'https://via.placeholder.com/250',
      },
    ];

    function Home() {
      return (
        <>
          <div className="hero">
            <div className="container">
              <h2>
                LINAWEAR <br />
                MODEST FASHION
              </h2>
              <button>SHOP NOW</button>
            </div>
          </div>
          <div className="featured-categories">
            <div className="container">
              <div className="category">
                <img src="https://via.placeholder.com/100" alt="Abayas" />
                <h3>Abayas</h3>
              </div>
              <div className="category">
                <img src="https://via.placeholder.com/100" alt="Hijabs" />
                <h3>Hijabs</h3>
              </div>
              <div className="category">
                <img src="https://via.placeholder.com/100" alt="Dresses" />
                <h3>Dresses</h3>
              </div>
              <div className="category">
                <img src="https://via.placeholder.com/100" alt="Accessories" />
                <h3>Accessories</h3>
              </div>
            </div>
          </div>
          <div className="product-highlights">
            <div className="container">
              <h2>Featured Products</h2>
              <div className="product-list">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
          <div className="testimonials">
            <div className="container">
              <h2>What Our Customers Say</h2>
              <div className="testimonial-list">
                <div className="testimonial">
                  <blockquote>
                    The abaya I purchased is beautiful and fits perfectly. The quality is excellent, and
                    I received many compliments.
                  </blockquote>
                  <p>Aisha K.</p>
                </div>
                <div className="testimonial">
                  <blockquote>
                    I love the variety of hijabs available. The colors are vibrant, and the fabric is
                    so comfortable.
                  </blockquote>
                  <p>Fatima Z.</p>
                </div>
                <div className="testimonial">
                  <blockquote>
                    The modest dress I ordered is perfect for everyday wear. It's stylish and
                    comfortable, and I feel confident wearing it.
                  </blockquote>
                  <p>Maryam S.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="promotions">
            <div className="container">
              <h2>Ramadan Special</h2>
              <p>Get 20% off on all items during Ramadan</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </>
      );
    }

    export default Home;
