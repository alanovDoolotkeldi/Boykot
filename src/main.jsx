import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { I18nextProvider } from "react-i18next";
import i18next from "./locales/i18next";
import "./css/styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductFetcher from "./api";// Убедитесь, что путь правильный
// import Cound from "./api/cound";
import CountFetcher from "./api/cound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <ProductFetcher /> {/* Добавьте сюда */}
        <CountFetcher /> {/* Добавьте сюда */}
        <RouterProvider router={router} />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
