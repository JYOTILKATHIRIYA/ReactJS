import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter/AppRouter';
import { Provider } from 'react-redux';
import Store from './Pages/Store/Store';
import Header from './Layout/Header';

import "./Assets/css/style.css"
import "./Assets/css/bootstrap.min.css"
import "./Assets/css/rootStyle.css"

let root = createRoot(document.getElementById("root"));
root.render(
  <>

      <Provider store={Store}>
        <BrowserRouter>
        <Header />
          <AppRouter />
        </BrowserRouter>
      </Provider >


  </>
)
