import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfor: (state, action) => {
      console.log("user đc gửi qua store là", action.payload);
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("userToken");
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUserInfor } = userSlice.actions;
export default userSlice.reducer;
