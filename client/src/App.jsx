import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/products/:category",
    element: <ProductList />,
  },
  {
    path: "/product/:id",
    element: <Product></Product>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

const App = () => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <RouterProvider router={router} />;
    </SkeletonTheme>
  );
};

export default App;
