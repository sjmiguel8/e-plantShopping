function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css'; // Renamed the import to avoid conflict
import PropTypes from 'prop-types';
var CartItem = function CartItem(_ref) {
  var onContinueShopping = _ref.onContinueShopping;
  var cart = useSelector(function (state) {
    return state.cart.plants;
  });
  var dispatch = useDispatch();
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    totalAmount = _useState2[0],
    setTotalAmount = _useState2[1];
  var calculateTotalAmount = useCallback(function () {
    return cart.reduce(function (total, plant) {
      var plantCost = parseFloat(plant.cost.replace('$', ''));
      var plantQuantity = parseInt(plant.quantity, 10);
      console.log("Item: ".concat(plant.name, ", Cost: ").concat(plant.cost, ", Quantity: ").concat(plant.quantity)); // Debugging log

      if (isNaN(plantCost) || isNaN(plantQuantity)) {
        console.error('Invalid item cost or quantity', plant);
        return total;
      }
      return total + plantCost * plantQuantity;
    }, 0);
  }, [cart]);
  useEffect(function () {
    console.log('Cart:', cart); // Debugging log
    var totalAmount = calculateTotalAmount();
    console.log('Total Amount:', totalAmount); // Debugging log
    setTotalAmount(totalAmount);
  }, [cart, calculateTotalAmount]);
  var handleContinueShopping = function handleContinueShopping() {
    onContinueShopping();
  };
  var handleCheckoutShopping = function handleCheckoutShopping() {
    alert('Functionality to be added for future reference');
  };
  var handleIncrement = function handleIncrement(plant) {
    dispatch(updateQuantity({
      name: plant.name,
      quantity: plant.quantity + 1
    }));
  };
  var handleDecrement = function handleDecrement(plant) {
    if (plant.quantity === 1) {
      dispatch(removeItem(plant.name));
    } else {
      dispatch(updateQuantity({
        name: plant.name,
        quantity: plant.quantity - 1
      }));
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Total Amount: $", totalAmount.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    className: "cart-container"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'black'
    }
  }, "Total Cart Amount: $", calculateTotalAmount()), /*#__PURE__*/React.createElement("div", null, cart.map(function (plant) {
    return /*#__PURE__*/React.createElement("div", {
      className: "cart-item",
      key: plant.name
    }, /*#__PURE__*/React.createElement("img", {
      className: "cart-item-image",
      src: plant.image,
      alt: plant.name
    }), /*#__PURE__*/React.createElement("div", {
      className: "cart-item-details"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cart-item-name"
    }, plant.name), /*#__PURE__*/React.createElement("div", {
      className: "cart-item-cost"
    }, plant.cost), /*#__PURE__*/React.createElement("div", {
      className: "cart-item-quantity"
    }, /*#__PURE__*/React.createElement("button", {
      className: "cart-item-button cart-item-button-dec",
      onClick: function onClick() {
        return handleDecrement(plant);
      }
    }, "-"), /*#__PURE__*/React.createElement("span", {
      className: "cart-item-quantity-value"
    }, plant.quantity), /*#__PURE__*/React.createElement("button", {
      className: "cart-item-button cart-item-button-inc",
      onClick: function onClick() {
        return handleIncrement(plant);
      }
    }, "+"), /*#__PURE__*/React.createElement("div", {
      className: "cart-item-total"
    }, "Total: $", (parseFloat(plant.cost.replace('$', '')) * plant.quantity).toFixed(2))), /*#__PURE__*/React.createElement("button", {
      className: "cart-item-button cart-item-button-remove",
      onClick: function onClick() {
        return dispatch(removeItem(plant.name));
      }
    }, "Remove"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '20px',
        color: 'black'
      },
      className: "total_cart_amount"
    })));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleContinueShopping
  }, "Continue Shopping"), /*#__PURE__*/React.createElement("button", {
    onClick: handleCheckoutShopping
  }, "Checkout")));
};
CartItem.propTypes = {
  onContinueShopping: PropTypes.func.isRequired
};
export default CartItem;