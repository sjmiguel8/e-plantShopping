import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plants: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingPlant = state.plants.find(plant => plant.name === name);
      if (existingPlant) {
        existingPlant.quantity++;
      } else {
        state.plants.push({ name, image, cost, quantity: 1 });
      }
      state.totalQuantity++;
      console.log('Plant added:', state.plants); // Debugging log
    },
    removeItem: (state, action) => {
      const plantToRemove = state.plants.find(plant => plant.name === action.payload);
      if (plantToRemove) {
        state.totalQuantity -= plantToRemove.quantity;
        state.plants = state.plants.filter(plant => plant.name !== action.payload);
        console.log('Plant removed:', state.plants); // Debugging log
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const plantToUpdate = state.plants.find(plant => plant.name === name);
      if (plantToUpdate) {
        state.totalQuantity += quantity - plantToUpdate.quantity;
        plantToUpdate.quantity = quantity;
        console.log('Plant quantity updated:', state.plants); // Debugging log
      }
    },
    increment: (state, action) => {
      const plant = state.plants.find(plant => plant.name === action.payload);
      if (plant) {
        plant.quantity++;
        state.totalQuantity++;
        console.log('Plant incremented:', state.plants); // Debugging log
      }
    },
    decrement: (state, action) => {
      const plant = state.plants.find(plant => plant.name === action.payload);
      if (plant && plant.quantity > 0) {
        plant.quantity--;
        state.totalQuantity--;
        console.log('Plant decremented:', state.plants); // Debugging log
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;