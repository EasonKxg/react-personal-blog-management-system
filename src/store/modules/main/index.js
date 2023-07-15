import { createSlice } from "@reduxjs/toolkit";


const mainSlice = createSlice({
  name: "main",
  initialState: {
    isLoading: false,
  },
  reducers: {
    changeLoadingState(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { changeLoadingState } = mainSlice.actions;
export default mainSlice.reducer;
