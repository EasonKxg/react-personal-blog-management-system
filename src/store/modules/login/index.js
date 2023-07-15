import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// 创建请求付费
const feachLoginDataAction = createAsyncThunk(
  "loginData",
  async (payload, { dispatch, getState }) => {
    // doLogin().then((res) => {
    //   console.log(res);
    //   dispatch(changeUserInfo(res));
    // });
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    userInfo: {},
  },
  reducers: {
    changeUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const { changeUserInfo } = loginSlice.actions;
export { feachLoginDataAction };
export default loginSlice.reducer;
