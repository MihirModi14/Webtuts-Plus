import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

import { Message } from "./components/index.ts";
import { AuthContextProvider, UserContextProvider } from "./contexts/index.ts";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={
        <Message
          type="ERROR"
          message="Something Went Wrong. Please Reload Page."
        ></Message>
      }
    >
      <AuthContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <App />
            <ToastContainer />
          </BrowserRouter>
        </UserContextProvider>
      </AuthContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
