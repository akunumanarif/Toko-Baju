import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Success from "./pages/Success";
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
  {
    path: "/success",
    element: <Success />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;

  // (
  //   <SkeletonTheme baseColor="#5294e0" highlightColor="#96c7ff">
  //   </SkeletonTheme>
  // );
};

export default App;
