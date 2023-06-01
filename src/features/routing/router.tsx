import React from "react";

import { createBrowserRouter } from "react-router-dom";
import { Root } from "./views";
import { Landing } from "../landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Something went wrong</div>,
    children: [{ index: true, element: <Landing /> }],
  },
]);
