import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate for going back
import "./CartPage.style.css";

const CartPage = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } =
    useContext(CartContext);

  const navigate = useNavigate(); // Hook to navigate programmatically

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Go back to the product page
  const handleGoBack = () => {
    navigate("/books"); // Navigate to the product listing page
  };

  return (
    <div className="cart-page-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.url} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>
                    <strong>Price:</strong> ₹{item.price}
                  </p>

                  {/* Quantity adjustment section */}
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(item.id)}>
                      -
                    </button>
                    <p>
                      Quantity: <strong>{item.quantity}</strong>
                    </p>
                    <button onClick={() => incrementQuantity(item.id)}>
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Amount Section */}
          <div className="cart-total">
            <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
          </div>
        </>
      )}

      {/* Go back button */}
      <div className="go-back-btn-container">
        <button className="go-back-btn" onClick={handleGoBack}>
          Go Back to Books
        </button>
      </div>
    </div>
  );
};

export default CartPage;
