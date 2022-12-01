import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
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
      element: user ? <Navigate to="/" /> : <Login></Login>,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "/success",
      element: <Success />,
    },
  ]);
  return <RouterProvider router={router} />;

  // (
  //   <SkeletonTheme baseColor="#5294e0" highlightColor="#96c7ff">
  //   </SkeletonTheme>
  // );
};

export default App;
