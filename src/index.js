import { Suspense } from "react";
import ReactDom from "react-dom/client";
import store from "store";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Loading from "components/Loading/Loading";
import Theme from "./styles/theme/index.js";
import "normalize.css";

// const { mainModule } = store.getState();
// const { isLoading } = mainModule;
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      {/* <ThemeProvider theme={Theme}> */}
      <HashRouter>
        {/* {isLoading && <Loading />} */}
        <App />
      </HashRouter>
      {/* </ThemeProvider> */}
    </Provider>
  </Suspense>
);
