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

  return (
    <Router>
      {/* <Route path="/login" element={<Login />} /> */}
      {admin && (
        <>
          <Topbar />
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>

            <Route path="/newProduct" element={<NewProduct />}></Route>
            <Route path="/product/:productId" element={<Product />}></Route>
            <Route path="/products" element={<ProductList />}></Route>
            <Route path="/newUser" element={<NewUser />}></Route>
            <Route path="/user/:userId" element={<User />}></Route>
            <Route path="/users" element={<UserLists />}></Route>
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
