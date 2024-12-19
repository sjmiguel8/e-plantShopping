function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
function App() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showProductList = _useState2[0],
    setShowProductList = _useState2[1];
  var handleGetStartedClick = function handleGetStartedClick() {
    setShowProductList(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "landing-page ".concat(showProductList ? 'fade-out' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "background-image"
  }), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "landing_content"
  }, /*#__PURE__*/React.createElement("h1", null, "Welcome To Paradise Nursery"), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("p", null, "Where Green Meets Serenity"), /*#__PURE__*/React.createElement("button", {
    className: "get-started-button",
    onClick: handleGetStartedClick
  }, "Get Started")), /*#__PURE__*/React.createElement("div", {
    className: "aboutus_container"
  }, /*#__PURE__*/React.createElement(AboutUs, null)))), /*#__PURE__*/React.createElement("div", {
    className: "product-list-container ".concat(showProductList ? 'visible' : '')
  }, /*#__PURE__*/React.createElement(ProductList, null)));
}
export default App;