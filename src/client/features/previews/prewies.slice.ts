import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PreviewsState, Previews} from "./previews.types";

const initialState: PreviewsState = {
    previews: [],
    loading: false
};

export const previewsSlice = createSlice({
    name: "previews",
    initialState,
    reducers: {
        fetchPreviews: (state: PreviewsState, _: PayloadAction) => {
            state.loading = true;
        },
        fetchPreviewsSuccess: (state: PreviewsState, action: PayloadAction<Previews>) => {
            state.previews = [...action.payload.previews];
        }
    }
});

const {actions, reducer} = previewsSlice;
export const {fetchPreviews, fetchPreviewsSuccess} = actions;
export const previewsReducer = reducer;