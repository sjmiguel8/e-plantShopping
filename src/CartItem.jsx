import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css'; // Renamed the import to avoid conflict
import PropTypes from 'prop-types';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.plants);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotalAmount = useCallback(() => {
    return cart.reduce((total, plant) => {
      const plantCost = parseFloat(plant.cost.replace('$', ''));
      const plantQuantity = parseInt(plant.quantity, 10);

      console.log(`Item: ${plant.name}, Cost: ${plant.cost}, Quantity: ${plant.quantity}`); // Debugging log

      if (isNaN(plantCost) || isNaN(plantQuantity)) {
        console.error('Invalid item cost or quantity', plant);
        return total;
      }

      return total + plantCost * plantQuantity;
    }, 0);
  }, [cart]);

  useEffect(() => {
    console.log('Cart:', cart); // Debugging log
    const totalAmount = calculateTotalAmount();
    console.log('Total Amount:', totalAmount); // Debugging log
    setTotalAmount(totalAmount);
  }, [cart, calculateTotalAmount]);

  const handleContinueShopping = () => {
    onContinueShopping();
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (plant) => {
    dispatch(updateQuantity({ name: plant.name, quantity: plant.quantity + 1 }));
  };

  const handleDecrement = (plant) => {
    if (plant.quantity === 1) {
      dispatch(removeItem(plant.name));
    } else {
      dispatch(updateQuantity({ name: plant.name, quantity: plant.quantity - 1 }));
    }
  };

  return (
    <div>
    <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      {/* Other cart item rendering logic */}
      <div className="cart-container">
        <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
        <div>
          {cart.map(plant => (
            <div className="cart-item" key={plant.name}>
              <img className="cart-item-image" src={plant.image} alt={plant.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{plant.name}</div>
                <div className="cart-item-cost">{plant.cost}</div>
                <div className="cart-item-quantity">
                  <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(plant)}>-</button>
                  <span className="cart-item-quantity-value">{plant.quantity}</span>
                  <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(plant)}>+</button>
                  <div className="cart-item-total">Total: ${(parseFloat(plant.cost.replace('$', '')) * plant.quantity).toFixed(2)}</div>
                </div>
                <button className="cart-item-button cart-item-button-remove" onClick={() => dispatch(removeItem(plant.name))}>Remove</button>
                <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleContinueShopping}>Continue Shopping</button>
        <button onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  onContinueShopping: PropTypes.func.isRequired,
};

export default CartItem;