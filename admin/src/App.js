import "./App.css";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import UserLists from "./pages/userLists/UserLists";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Topbar />
          <Sidebar />
          <Home></Home>
        </>
      ),
    },
    {
      path: "/users",
      element: (
        <>
          <Topbar />
          <Sidebar />
          <UserLists />
        </>
      ),
    },
    {
      path: "/user/:userId",
      element: (
        <>
          <Topbar />
          <Sidebar />
          <User />
        </>
      ),
    },
    {
      path: "/newUser",
      element: (
        <>
          <Topbar />
          <Sidebar />
          <NewUser />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <Topbar />
          <Sidebar />
          <ProductList />
        </>
      ),
    },
    {
      path: "/product/:productId",
      element: (
        <>
          <Topbar />
          <Sidebar />
          <Product />
        </>
      ),
    },
    {
      path: "/newProduct",
      element: (
        <>
          <Topbar />
          <Sidebar />
          <NewProduct />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Topbar />
          <Sidebar />
          <Login />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
