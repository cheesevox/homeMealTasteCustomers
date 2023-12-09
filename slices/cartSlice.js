import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: {},
  quantity:null
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        console.log("payload item la",action.payload)
      state.item = action.payload
    },
    removeFromCart: (state, action) => {
    //   let newCart = [...state.item];
    //   let itemIndex = state.item.findIndex(
    //     (item) => item.id == action.payload.id
    //   );
    //   if (itemIndex >= 0) {
    //     newCart.splice(itemIndex, 1);
    //   } else {
    //     console.log("Can't remove the item that is not added to cart !");
    //   }
    //   state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart?.items;
export const selectCartItemsById = (state, id) =>
  state.cart?.items?.filter((item) => item.id == id);
export const selectCartTotal = (state) =>
  state.cart?.items?.reduce((total, item) => (total = total + item.price), 0);
export default cartSlice.reducer;