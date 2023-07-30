import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLabelList } from "services/label";

const feachlabelDataAction = createAsyncThunk(
  "labelData",
  async (payload, { dispatch, getState }) => {
    getLabelList().then((res) => {
      dispatch(changeLabelList(res.data));
    });
  }
);

const labelSlice = createSlice({
  name: "label",
  initialState: {
    labelList: [],
  },
  reducers: {
    changeLabelList(state, { payload }) {
      state.labelList = payload;
    },
  },
});

export const { changeLabelList } = labelSlice.actions;
export { feachlabelDataAction };
export default labelSlice.reducer;
