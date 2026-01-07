import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import reportWebVitals from './reportWebVitals';
import Portfolio from "./App";
import "./i18n";
import {Provider} from "react-redux";
import store from "./store";
import {theme} from "./theme";
import {ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Provider store={store}>
              <Portfolio />
          </Provider>
      </ThemeProvider>

  </React.StrictMode>
);

reportWebVitals();
