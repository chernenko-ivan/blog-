import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginState} from "./login.types";
import {LoginRequest, LoginResponse} from "../../../common/login.types";

const initialState: LoginState = {
    username: '',
    password: '',
    email: '',
    loading: false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        changeUsername: (state: LoginState, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        changeEmail: (state: LoginState, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        changePassword: (state: LoginState, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        sendLoginRequest: (state: LoginState, _: PayloadAction<LoginRequest>) => {
            state.loading = true;
        },
        sendCreateProfileRequest: (state: LoginState, _: PayloadAction<LoginRequest>) => {
            state.loading = true;
        },
        sendLoginRequestSuccess: (state: LoginState, action: PayloadAction<string>) => {
            state.loading = false;
            if (action.payload) {
                window.location.assign('/profile')
            }
        },
        sendCreateProfileRequestSuccess: (state: LoginState, action: PayloadAction<string>) => {
            state.loading = false;
            if (action.payload) {
                window.location.assign('/profile')
            }
        },
    }
});

export const loginReducer = loginSlice.reducer;
export const {changeEmail, changePassword, changeUsername, sendLoginRequestSuccess, sendCreateProfileRequestSuccess, sendCreateProfileRequest, sendLoginRequest} = loginSlice.actions;