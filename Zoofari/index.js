import "./css/style.css";
import "./css/bootstrap.min.css"

import React from "react";
import ReduxStore from "./ReduxStore/Store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import AppRoutes from "./Routes/Routes"

let root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={ReduxStore}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
)