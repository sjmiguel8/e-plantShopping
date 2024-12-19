function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
function ProductList() {
  var dispatch = useDispatch();
  var cart = useSelector(function (state) {
    return state.cart.plants;
  });
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    addedToCart = _useState2[0],
    setAddedToCart = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showCart = _useState4[0],
    setShowCart = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showPlants = _useState6[0],
    setShowPlants = _useState6[1];
  var handleCartClick = function handleCartClick(e) {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
  };
  var handlePlantsClick = function handlePlantsClick(e) {
    e.preventDefault();
    setShowPlants(true); // Set showPlants to true when "Plants" link is clicked
    setShowCart(false); // Hide the cart when navigating to Plants
  };
  var handleAddToCart = function handleAddToCart(plant) {
    console.log('Adding to cart:', plant); // Debugging log
    dispatch(addItem(plant));
    setAddedToCart(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, plant.name, true));
    });
  };
  useEffect(function () {
    console.log('Added to cart:', addedToCart); // Debugging log
  }, [addedToCart]);
  var plantsArray = [{
    category: "Air Purifying Plants",
    plants: [{
      name: "Snake Plant",
      image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
      description: "Produces oxygen at night, improving air quality.",
      cost: "$15"
    }, {
      name: "Spider Plant",
      image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
      description: "Filters formaldehyde and xylene from the air.",
      cost: "$12"
    }, {
      name: "Peace Lily",
      image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
      description: "Removes mold spores and purifies the air.",
      cost: "$18"
    }, {
      name: "Boston Fern",
      image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
      description: "Adds humidity to the air and removes toxins.",
      cost: "$20"
    }, {
      name: "Rubber Plant",
      image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
      description: "Easy to care for and effective at removing toxins.",
      cost: "$17"
    }, {
      name: "Aloe Vera",
      image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
      description: "Purifies the air and has healing properties for skin.",
      cost: "$14"
    }]
  }, {
    category: "Aromatic Fragrant Plants",
    plants: [{
      name: "Lavender",
      image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Calming scent, used in aromatherapy.",
      cost: "$20"
    }, {
      name: "Jasmine",
      image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Sweet fragrance, promotes relaxation.",
      cost: "$18"
    }, {
      name: "Rosemary",
      image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
      description: "Invigorating scent, often used in cooking.",
      cost: "$15"
    }, {
      name: "Mint",
      image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
      description: "Refreshing aroma, used in teas and cooking.",
      cost: "$12"
    }, {
      name: "Lemon Balm",
      image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
      description: "Citrusy scent, relieves stress and promotes sleep.",
      cost: "$14"
    }, {
      name: "Hyacinth",
      image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
      description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
      cost: "$22"
    }]
  }, {
    category: "Insect Repellent Plants",
    plants: [{
      name: "oregano",
      image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
      description: "The oregano plants contains compounds that can deter certain insects.",
      cost: "$10"
    }, {
      name: "Marigold",
      image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
      description: "Natural insect repellent, also adds color to the garden.",
      cost: "$8"
    }, {
      name: "Geraniums",
      image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
      description: "Known for their insect-repelling properties while adding a pleasant scent.",
      cost: "$20"
    }, {
      name: "Basil",
      image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
      description: "Repels flies and mosquitoes, also used in cooking.",
      cost: "$9"
    }, {
      name: "Lavender",
      image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Calming scent, used in aromatherapy.",
      cost: "$20"
    }, {
      name: "Catnip",
      image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
      description: "Repels mosquitoes and attracts cats.",
      cost: "$13"
    }]
  }, {
    category: "Medicinal Plants",
    plants: [{
      name: "Aloe Vera",
      image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
      description: "Soothing gel used for skin ailments.",
      cost: "$14"
    }, {
      name: "Echinacea",
      image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
      description: "Boosts immune system, helps fight colds.",
      cost: "$16"
    }, {
      name: "Peppermint",
      image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
      description: "Relieves digestive issues and headaches.",
      cost: "$13"
    }, {
      name: "Lemon Balm",
      image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
      description: "Calms nerves and promotes relaxation.",
      cost: "$14"
    }, {
      name: "Chamomile",
      image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
      description: "Soothes anxiety and promotes sleep.",
      cost: "$15"
    }, {
      name: "Calendula",
      image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
      description: "Heals wounds and soothes skin irritations.",
      cost: "$12"
    }]
  }, {
    category: "Low Maintenance Plants",
    plants: [{
      name: "ZZ Plant",
      image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Thrives in low light and requires minimal watering.",
      cost: "$25"
    }, {
      name: "Pothos",
      image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
      description: "Tolerates neglect and can grow in various conditions.",
      cost: "$10"
    }, {
      name: "Snake Plant",
      image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
      description: "Needs infrequent watering and is resilient to most pests.",
      cost: "$15"
    }, {
      name: "Cast Iron Plant",
      image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
      description: "Hardy plant that tolerates low light and neglect.",
      cost: "$20"
    }, {
      name: "Succulents",
      image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
      description: "Drought-tolerant plants with unique shapes and colors.",
      cost: "$18"
    }, {
      name: "Aglaonema",
      image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
      description: "Requires minimal care and adds color to indoor spaces.",
      cost: "$22"
    }]
  }];
  var styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignIems: 'center',
    fontSize: '20px'
  };
  var styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px'
  };
  var styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "navbar",
    style: styleObj
  }, /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, /*#__PURE__*/React.createElement("div", {
    className: "luxury"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'white'
    }
  }, "Paradise Nursery"), /*#__PURE__*/React.createElement("i", {
    style: {
      color: 'white'
    }
  }, "Where Green Meets Serenity"))))), /*#__PURE__*/React.createElement("div", {
    style: styleObjUl
  }, /*#__PURE__*/React.createElement("div", null, " ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      return handlePlantsClick(e);
    },
    style: styleA
  }, "Plants")), /*#__PURE__*/React.createElement("div", null, " ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      return handleCartClick(e);
    },
    style: styleA
  }, /*#__PURE__*/React.createElement("h1", {
    className: "cart"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    id: "IconChangeColor",
    height: "68",
    width: "68"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "156",
    height: "156",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "216",
    r: "12"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "184",
    cy: "216",
    r: "12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8",
    fill: "none",
    stroke: "#faf9f9",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    id: "mainIconPathAttribute"
  }))))))), !showCart ? /*#__PURE__*/React.createElement("div", {
    className: "product-grid"
  }, plantsArray.map(function (category, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement("h1", null, category.category), /*#__PURE__*/React.createElement("div", {
      className: "product-list"
    }, category.plants.map(function (plant, plantIndex) {
      return /*#__PURE__*/React.createElement("div", {
        className: "product-card",
        key: plantIndex
      }, /*#__PURE__*/React.createElement("img", {
        className: "product-image",
        src: plant.image,
        alt: plant.name
      }), /*#__PURE__*/React.createElement("div", {
        className: "product-title"
      }, plant.name), /*#__PURE__*/React.createElement("div", {
        className: "product-description"
      }, plant.description), /*#__PURE__*/React.createElement("div", {
        className: "product-cost"
      }, plant.cost), /*#__PURE__*/React.createElement("button", {
        className: "product-button",
        onClick: function onClick() {
          return handleAddToCart(plant);
        },
        disabled: addedToCart[plant.name]
      }, "Add to Cart"), addedToCart[plant.name] && /*#__PURE__*/React.createElement("span", null, "Added to cart!"));
    })));
  })) : /*#__PURE__*/React.createElement(CartItem, {
    onContinueShopping: function onContinueShopping() {
      return setShowCart(false);
    }
  }));
}
export default ProductList;