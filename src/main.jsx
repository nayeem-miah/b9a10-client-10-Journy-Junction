import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes/Route.jsx";
import AuthContextProvider from "./Context/AuthContextProvider";
import 'animate.css';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={Route} />
    </AuthContextProvider>
  </React.StrictMode>
);
