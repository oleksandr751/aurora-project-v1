import types from "../types";

interface userTypes {
  type: any;
  payload: any;
  isAuthenticated: boolean;
  userError: boolean;
}
const initialState = {
  name: "",
  age: null,
  isAuthenticated: false,
  userError: false,
};

const user = (state = initialState, { type, payload }: userTypes) => {
  switch (type) {
    case types.USER_ERROR:
      return { ...state, userError: payload.userError };
    case types.SET_USER_AUTHENTICATED:
      return { ...state, isAuthenticated: payload.isAuthenticated };
    case types.SET_USER_DATA_START:
      return { ...state, name: payload.name };
    case types.SET_USER_DATA_SUCCESS:
      return { ...state, name: payload.name, age: payload.age };
    case types.SET_USER_DATA_RESET:
      return { initialState };
    default:
      return state;
  }
};

export default user;
