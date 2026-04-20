import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter";
import { Toaster } from "react-hot-toast";
import store, { persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(

    <Provider store={store}>
      <Toaster position="top-center" />
      <PersistGate loading={<div>Loading ...</div>} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>

);
