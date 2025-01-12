import React from 'react';

    function CartPage() {
      const cartItems = [
        {
          id: 1,
          name: 'Product 1',
          price: 19.99,
          quantity: 2,
          image: 'https://via.placeholder.com/50',
        },
        {
          id: 2,
          name: 'Product 2',
          price: 29.99,
          quantity: 1,
          image: 'https://via.placeholder.com/50',
        },
      ];

      const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      const tax = subtotal * 0.1;
      const shipping = 5;
      const total = subtotal + tax + shipping;

      return (
        <div className="cart-page">
          <div className="container">
            <h1>Shopping Cart</h1>
            <div className="cart-items">
              <div className="product-list">
                {cartItems.map((item) => (
                  <div className="product-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p>Price: ${item.price}</p>
                      <div className="quantity-selector">
                        <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                        <input
                          type="number"
                          id={`quantity-${item.id}`}
                          defaultValue={item.quantity}
                          min="1"
                        />
                        <button>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-summary">
                <h2>Order Summary</h2>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p>Shipping: ${shipping.toFixed(2)}</p>
                <p>Total: ${total.toFixed(2)}</p>
                <button>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default CartPage;
