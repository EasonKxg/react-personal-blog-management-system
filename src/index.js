import ReactDom from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";

import "normalize.css";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
