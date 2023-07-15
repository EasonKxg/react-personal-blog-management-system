import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./modules/main";
import loginReducer from "./modules/login";

const store = configureStore({
  reducer: {
    mainModule: mainReducer,
    loginModule: loginReducer,
  },
});

export default store;
