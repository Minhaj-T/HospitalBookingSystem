import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { GoogleOAuthProvider } from '@react-oauth/google';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <Provider store={store}>
      <App />
    </Provider>
    .</GoogleOAuthProvider>;
    </ErrorBoundary>
  </React.StrictMode>
);
