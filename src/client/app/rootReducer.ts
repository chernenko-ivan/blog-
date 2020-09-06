import {combineReducers} from "@reduxjs/toolkit";

import {profileReducer} from "../features/profile";
import {authControllerReducer} from "../features/authController";
import {loginReducer} from "../features/login/login.slice";


export const rootReducer = combineReducers({
    profileState: profileReducer,
    authState: authControllerReducer,
    loginState: loginReducer
});