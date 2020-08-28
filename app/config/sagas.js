import { takeEvery, put, select } from "redux-saga/effects";
import {
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_EMAIL,
  LOGIN_PASS
} from "../actions/Login";
import { url } from "../config/global";

var body_text;
var user_info = {};
var userEmail, userpass;
var status;

function* fetchUserDetails(action) {
     userEmail = action.userDetails.userEmail
     userpass = action.userDetails.userPass
     console.log(userEmail + "pass" + userpass)
  yield fetch(url + "/api/auth/driver", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email:userEmail,
      password:userpass
    })
  })
    .then(response => {
      status = response.status;
      body_text = response._bodyText;
      console.log(body_text);
    })
    .catch(error => {
      console.error(error);
    });

  if (status == 200) {
    yield fetch(url + "/api/driver/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": body_text
      }
    })
      .then(response => response.json())
      .then(res => {
        user_info = res;
      })
      .catch(error => {
        console.log(error);
      });

    yield put({ type: "LOGIN_USER_ASYNC", userData: user_info,isloggedIn:true });
  }
  else{
    user_info={
      isLoggedIn:false,
      res_error:body_text,
      return_status:status
    }
    yield put({ type: "LOGIN_USER_ASYNC", userData: user_info,isloggedIn:false });
  }
}

export default function* rootSaga() {
  yield takeEvery(LOGIN_USER, fetchUserDetails);
}
