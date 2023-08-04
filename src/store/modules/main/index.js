import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    isLoading: false,
    token: null,
  },
  reducers: {
    changeLoadingState(state, action) {
      state.isLoading = action.payload;
    },
    changeToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { changeLoadingState, changeToken } = mainSlice.actions;
export default mainSlice.reducer;
