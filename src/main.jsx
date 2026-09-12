
import './index.css'

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';

import Products from './Pages/Products/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
     children: [
      { index: true, element: <Home></Home> },
      { path: "/products", element: <Products></Products> },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
