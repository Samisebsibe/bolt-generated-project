import React from 'react';

    function CheckoutPage() {
      return (
        <div className="checkout-page">
          <div className="container">
            <h1>Checkout</h1>
            <div className="checkout-form">
              <div>
                <h2>Shipping Details</h2>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="Zip Code" />
              </div>
              <div>
                <h2>Payment Method</h2>
                <input type="radio" name="payment" value="creditcard" /> Credit Card
                <input type="radio" name="payment" value="paypal" /> PayPal
              </div>
              <div>
                <h2>Review Order</h2>
                <p>Product 1 x 2</p>
                <p>Product 2 x 1</p>
                <p>Total: $74.97</p>
              </div>
              <button>Place Order</button>
            </div>
          </div>
        </div>
      );
    }

    export default CheckoutPage;
