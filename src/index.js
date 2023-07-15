import ReactDom from "react-dom/client";
import store from "store";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Loading from "components/Loading/Loading";
import "normalize.css";

const { mainModule } = store.getState();
const { isLoading } = mainModule;
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HashRouter>
      {isLoading && <Loading />}
      <App />
    </HashRouter>
  </Provider>
);
