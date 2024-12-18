import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./layout/App.tsx";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore.ts";
import "./style/App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </StrictMode>
);
