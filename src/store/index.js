import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./modules/main";
import loginReducer from "./modules/login";
import accountReducer from "./modules/account";
import labelReducer from "./modules/label";

const store = configureStore({
  reducer: {
    mainModule: mainReducer,
    loginModule: loginReducer,
    accountModule: accountReducer,
    labelModule: labelReducer,
  },
});

export default store;
