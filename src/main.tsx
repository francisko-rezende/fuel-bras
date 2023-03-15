import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { theme } from "./theme/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, History } from "@routes";
import { Main } from "@components";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@lib/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
