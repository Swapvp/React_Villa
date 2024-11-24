import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.jsx";
import Properties from "./Pages/Properties.jsx";
import PropertyDetails from "./Pages/PropertyDetails.jsx";
import Contact from "./Pages/Contact.jsx";
import Details from "./Components/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/properties",
    element: <Properties />,
  },
  {
    path: "/property-details",
    element: <PropertyDetails />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/Details/:id",
    element: <Details />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
