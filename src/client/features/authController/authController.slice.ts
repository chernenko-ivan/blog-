import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthControllerState, FetchAuthSuccess} from "./authController.types";

const initialState: AuthControllerState = {
    isAuthenticated: false,
    loading: false,
};

const authControllerSlice = createSlice({
    name: 'authController',
    initialState: initialState as AuthControllerState,
    reducers: {
        fetchAuthController: (state: AuthControllerState) => {
            state.loading = true;
        },
        fetchAuthControllerSuccess: (state: AuthControllerState, action: PayloadAction<FetchAuthSuccess>) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.avatar = action.payload.avatar;
            state.loading = false;
        }
    }
});

export const {fetchAuthController, fetchAuthControllerSuccess} = authControllerSlice.actions;
export const authControllerReducer = authControllerSlice.reducer;