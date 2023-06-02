import React from "react";

import { createBrowserRouter, LoaderFunction } from "react-router-dom";
import { Root } from "./views";
import { HighlightDetails, HighlightParamsLoader, Landing } from "../landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Something went wrong</div>,
    children: [
      { index: true, element: <Landing /> },
      {
        path: ":highlight",
        loader: HighlightParamsLoader as unknown as LoaderFunction,
        element: <HighlightDetails />,
      },
    ],
  },
]);
