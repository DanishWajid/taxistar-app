import * as types from "./index"

export const loginUser = user =>({
    type:types.LOGIN_USER,
    user
})


export const logoutUser =()=>({
    type:types.LOGOUT_USER
})