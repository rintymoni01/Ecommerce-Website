import "./index.css";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ClerkProvider } from "@clerk/clerk-react";

import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import { DataProvider } from "./Contex/DataContex";
import SingleProducts from "./Pages/Products/ProductsComponents/SingleProducts";
import { CartProvider } from "./Contex/CardContex";
import { ToastContainer } from "react-toastify";
import CategoryProduct from "./Pages/CategoryProduct";
import ScrollToTop from "react-scroll-to-top";



const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProducts />,
      },
       {
        path: "/category/:category",
        element: <CategoryProduct />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ClerkProvider
    publishableKey={PUBLISHABLE_KEY}
    afterSignOutUrl="/"
  >
    <ScrollToTop smooth color="white"  style={{backgroundColor:'#fa2d37', display:'flex', alignItems:'center', justifyContent:'center', }}/>
    <DataProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      </CartProvider>
    </DataProvider>
  </ClerkProvider>
);