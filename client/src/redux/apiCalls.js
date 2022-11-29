import { loginError, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../reqMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginError());
  }
};
