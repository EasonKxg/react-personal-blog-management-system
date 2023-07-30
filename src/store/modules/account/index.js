import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUserList } from "services/account";

const feachAccountDataAction = createAsyncThunk(
  "accountData",
  async (payload, { dispatch, getState }) => {
    getAllUserList().then((res) => {
      dispatch(changeUserList(res.data));
    });
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState: {
    userList: [],
  },
  reducers: {
    changeUserList(state, { payload }) {
      state.userList = payload;
    },
  },
});

export const { changeUserList } = accountSlice.actions;
export { feachAccountDataAction };
export default accountSlice.reducer;
