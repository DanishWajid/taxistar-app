import * as types from "../actions/index";

const initialState = {
  isloggedIn: false,
  userData: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_SUCESS:
      return {
        ...state,
        isLoggedIn: true,
        userData: action.userData || {}
      };

      case types.LOGIN_USER_ERROR:
      return {
        ...state,
        isLoggedIn:false,
        userData:action.userData
      }
    case types.LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        userData: {}
      };

    default:
      return state;
  }
};

export default reducer;
