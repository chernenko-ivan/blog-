import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";

export const Previews = () => {
    const dispatch = useDispatch();
    const {previews, loading} = useSelector((state: RootState) => ({
        previews: state.previewsReducer.previews,
        loading: state.previewsReducer.loading
    }));

};