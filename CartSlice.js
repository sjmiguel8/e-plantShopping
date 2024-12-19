import { createSlice } from '@reduxjs/toolkit';
var initialState = {
  plants: [],
  totalQuantity: 0
};
var cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem: function addItem(state, action) {
      var _action$payload = action.payload,
        name = _action$payload.name,
        image = _action$payload.image,
        cost = _action$payload.cost;
      var existingPlant = state.plants.find(function (plant) {
        return plant.name === name;
      });
      if (existingPlant) {
        existingPlant.quantity++;
      } else {
        state.plants.push({
          name: name,
          image: image,
          cost: cost,
          quantity: 1
        });
      }
      state.totalQuantity++;
      console.log('Plant added:', state.plants); // Debugging log
    },
    removeItem: function removeItem(state, action) {
      var plantToRemove = state.plants.find(function (plant) {
        return plant.name === action.payload;
      });
      if (plantToRemove) {
        state.totalQuantity -= plantToRemove.quantity;
        state.plants = state.plants.filter(function (plant) {
          return plant.name !== action.payload;
        });
        console.log('Plant removed:', state.plants); // Debugging log
      }
    },
    updateQuantity: function updateQuantity(state, action) {
      var _action$payload2 = action.payload,
        name = _action$payload2.name,
        quantity = _action$payload2.quantity;
      var plantToUpdate = state.plants.find(function (plant) {
        return plant.name === name;
      });
      if (plantToUpdate) {
        state.totalQuantity += quantity - plantToUpdate.quantity;
        plantToUpdate.quantity = quantity;
        console.log('Plant quantity updated:', state.plants); // Debugging log
      }
    },
    increment: function increment(state, action) {
      var plant = state.plants.find(function (plant) {
        return plant.name === action.payload;
      });
      if (plant) {
        plant.quantity++;
        state.totalQuantity++;
        console.log('Plant incremented:', state.plants); // Debugging log
      }
    },
    decrement: function decrement(state, action) {
      var plant = state.plants.find(function (plant) {
        return plant.name === action.payload;
      });
      if (plant && plant.quantity > 0) {
        plant.quantity--;
        state.totalQuantity--;
        console.log('Plant decremented:', state.plants); // Debugging log
      }
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
  addItem = _cartSlice$actions.addItem,
  removeItem = _cartSlice$actions.removeItem,
  updateQuantity = _cartSlice$actions.updateQuantity,
  increment = _cartSlice$actions.increment,
  decrement = _cartSlice$actions.decrement;
export { addItem, removeItem, updateQuantity, increment, decrement };
export default cartSlice.reducer;