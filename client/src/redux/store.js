import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "./cartRedux";

export default configureStore({
  reducer: {
    cart: cartReduser,
  },
});
