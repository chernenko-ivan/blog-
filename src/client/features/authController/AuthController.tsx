import * as React from "react";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch, RootState} from "../../app/store";
import {AuthControllerState} from "./authController.types";
import {CommonLink} from "../../components/link";

export const AuthController: FC = () => {
    const dispatch = useDispatch<Dispatch>();
    const {loading, isAuthenticated, email, username, avatar} = useSelector<RootState, AuthControllerState>(state => ({
        isAuthenticated: state.authState.isAuthenticated,
        loading: state.authState.loading,
        email: state.authState.email,
        username: state.authState.username,
        avatar: state.authState.avatar,
    }));
    return <div>
        {
            !isAuthenticated
                ? <CommonLink url='/login' name='Sign up or login'/>
                : <div>
                    logined
                </div>
        }
    </div>
};