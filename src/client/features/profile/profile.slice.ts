import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProfileState} from "./profile.types";
import {UserClient} from "../../../common/user.types";

const initialState: ProfileState = {
    loading: false
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        fetchProfile: (state: ProfileState) => {
            state.loading = true;
        },
        fetchProfileSuccess: (state: ProfileState, action: PayloadAction<UserClient>) => {
            state.profile = action.payload;
            state.loading = false;
        },
    }
});

export const {fetchProfile, fetchProfileSuccess} = profileSlice.actions;
export const profileReducer = profileSlice.reducer;