// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.jsx";

import MainPage from "../pages/MainPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
    
]);

export default router;
