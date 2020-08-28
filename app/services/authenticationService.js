import { url } from "../config/global";

var user_info = {};
var body_text='';
var status='';
export function* UserService(action) {
  yield fetch(url + "/api/auth/driver", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email:action.user.email,
      password:action.user.pass
    })
  })
    .then(response => {
      status = response.status;
      body_text = response._bodyText;
      console.log(body_text,status);
    })
    .catch(error => {
      console.error(error);
    });

  if (status == 200) {
    console.log('I am in here');
    return yield fetch(url + "/api/driver/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": body_text
      }
    })
      .then(response => response.json())
      .then(res => {

        user_info = res;
        return user_info
      })
      .catch(error => {
        console.log(error);
      });

 
  }
  else{
    user_info={
      res_status:status,
      error:body_text,
      isLoggedIn:false
    }
    return user_info
    }
  }

