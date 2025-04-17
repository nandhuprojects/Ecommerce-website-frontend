import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  // In a real app, this would come from context or state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Headphones',
      price: 99.99,
      quantity: 1,
      image: '/api/placeholder/400/320'
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 129.99,
      quantity: 2,
      image: '/api/placeholder/400/320'
    }
  ]);
  
  const [showModal, setShowModal] = useState(false);

  const updateQuantity = (id, change) => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  const checkout = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process checkout logic would go here
    alert('Purchase completed!');
    setCartItems([]);
    closeModal();
  };

  return (
    <>
      <section className="cart-container">
        <h2>Your Shopping Cart</h2>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <p>Your cart is empty</p>
            <Link to="/products" className="btn">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        
        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button 
            className="btn checkout-btn" 
            onClick={checkout}
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </section>

      {showModal && (
        <div className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="address">Shipping Address</label>
                <textarea id="address" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expDate">Expiration Date</label>
                  <input type="text" id="expDate" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" placeholder="XXX" required />
                </div>
              </div>
              <button type="submit" className="btn">Complete Purchase</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;