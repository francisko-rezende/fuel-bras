import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { theme } from "./theme/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, History } from "@routes";
import { Main } from "@components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "historico", element: <History /> },
      { path: "/", element: <Main /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
