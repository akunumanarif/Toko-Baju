import "./App.css";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLists from "./pages/userLists/UserLists";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

const App = () => {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  // const admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.isAdmin;

  // const nonUser = () => {
  //   <Navigate to="/login">
  //     <Login></Login>
  //   </Navigate>;
  // };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Topbar />
  //         <Sidebar />
  //         <Home></Home>
  //       </>
  //     ),
  //     // children: [
  //     //   {
  //     //     path: "home",
  //     //     element: <Home></Home>,
  //     //   },
  //     //   {
  //     //     path: "users",
  //     //     element: <UserLists />,
  //     //   },
  //     //   {
  //     //     path: "user/:userId",
  //     //     element: <User />,
  //     //   },
  //     //   {
  //     //     path: "newUser",
  //     //     element: <NewUser />,
  //     //   },
  //     //   {
  //     //     path: "products",
  //     //     element: <ProductList />,
  //     //   },
  //     // ],
  //   },
  //   {
  //     path: "/users",
  //     element: (
  //       <>
  //         <Topbar />
  //         <Sidebar />
  //         <UserLists />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/user/:userId",
  //     element: (
  //       <>
  //         <Topbar />
  //         <Sidebar />
  //         <User />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/newUser",
  //     element: (
  //       <>
  //         <Topbar />
  //         <Sidebar />
  //         <NewUser />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/products",
  //     element: (
  //       <>
  //         <Topbar />
  //         <Sidebar />
  //         <ProductList />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/product/:productId",
  //     element: (
  //       <>
  //         <Topbar />
  //         <Sidebar />
  //         <Product />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/newProduct",
  //     element: (
  //       <>
  //         <Topbar />
  //         <Sidebar />
  //         <NewProduct />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/login",
  //     element: (
  //       <>
  //         <Login />
  //       </>
  //     ),
  //   },
  // ]);
  // return admin && <RouterProvider router={router}></RouterProvider>;

  return (
    <Router>
      {/* <Route path="/login" element={<Login />} /> */}
      {admin && (
        <>
          <Topbar />
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/newProduct" element={<NewProduct />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/users" element={<UserLists />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
