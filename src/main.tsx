import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Page1 from "./pages/1/1.tsx";
import Page2 from "./pages/2/2.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  { 
    path: "1",
    element: <Page1 />, 
  },
  { 
    path: "2",
    element: <Page2 />, 
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
