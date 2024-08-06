// src/index.tsx veya src/main.tsx (kök dosyanız)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx"; // Uygulama bileşeni

import { store } from "./redux/store";
import { Provider } from "react-redux"; // Oluşturduğunuz store
import "./index.css"; // CSS dosyanız

// React uygulamasını render edin
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
