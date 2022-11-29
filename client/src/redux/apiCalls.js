import { loginError, loginStart, loginSuccess } from "./userRedux";
import { publicReq } from "../reqMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicReq.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginError());
  }
};
