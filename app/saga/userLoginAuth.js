import { put, call } from "redux-saga/effects";
import { UserService } from "../services/authenticationService";

import * as types from "../actions";

export function* userLoginAuth(action) {
  const userData = yield call(UserService, action);
  console.log("login response ", userData);
  if (userData.res_status) {
    yield put({
      type: types.LOGIN_USER_ERROR,
      userData
    });
  } else {
    yield put({ type: types.LOGIN_USER_SUCESS, userData, isLoggedIn: true });
  }
}
