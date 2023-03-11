
import React from "react";
import { createRoot } from "react-dom/client";

/*Importing Stylesheets */
import "./Assets/css/style.css";
import "./Assets/css/bootstrap.min.css"

/* Importing third parties to deal with Routing and State-Management */
import ReduxStore from "./ReduxStore/Store";
import { Provider } from "react-redux";
import AppRoutes from "./Routes/Routes"
import { BrowserRouter } from "react-router-dom";

//Accesing a root of React App in index.html page
let root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={ReduxStore}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
)
