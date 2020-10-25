import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";
import { ListProvider } from "./providers/ListProviders";

ReactDOM.render(
  <BrowserRouter>
    <ListProvider>
      <App />
    </ListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
