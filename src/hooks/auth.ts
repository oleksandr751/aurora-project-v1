import { useDispatch } from "react-redux";
import { USER_LOGIN, USER_PASS } from "../config";
import types from "../redux/types";

export const useAuth = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({
      type: types.SET_USER_AUTHENTICATED,
      payload: { isAuthenticated: false },
    });
  };
  const handleLogin = (login: string, pass: string) => {
    if (pass === USER_PASS && login === USER_LOGIN) {
      console.log(login, pass);
      dispatch({
        type: types.SET_USER_AUTHENTICATED,
        payload: { isAuthenticated: true },
      });
      dispatch({ type: types.USER_ERROR, payload: { userError: false } });
    } else {
      dispatch({ type: types.USER_ERROR, payload: { userError: true } });
    }
  };

  return { handleLogout, handleLogin };
};
