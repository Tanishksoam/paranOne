import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  UserInfo: null,
  isLoading: true,
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    increamentQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity -= 1;
      }
    },
    // =======add user info to redux store=======
    addUser: (state, action) => {
      state.UserInfo = action.payload;
      console.log("userinfo", state.UserInfo.name);
    },
    removeUser: (state) => {
      state.UserInfo = null;
    },
    removeLoader: (state) => {
      state.isLoading = false;
    },
  },
});
const store = configureStore({
  reducer: bazarSlice.reducer,
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  increamentQuantity,
  decrementQuantity,
  addUser,
  removeUser,
  removeLoader,
} = bazarSlice.actions;
export default bazarSlice.reducer;
