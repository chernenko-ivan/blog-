import * as React from "react";
import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch, RootState} from "../../app/store";
import {LoginState} from "./login.types";
import {sendLoginRequest} from './login.slice'
import {changeEmail, changePassword, changeUsername, sendCreateProfileRequest} from "./login.slice";

export const Login: FC = () => {
    const dispatch = useDispatch<Dispatch>();
    const {username, email, password} = useSelector<RootState, LoginState>(state => ({
        ...state.loginState
    }));

    return (
        <div>
            <input
                onChange={e => dispatch(changeUsername(e.target.value))}
                value={username}
            />
            <input
                onChange={e => dispatch(changeEmail(e.target.value))}
                value={email}
            />
            <input
                onChange={e => dispatch(changePassword(e.target.value))}
                type="password"
                value={password}
            />
            <button
                onClick={() => dispatch(sendLoginRequest({
                    email,
                    password,
                    username,
                }))}
            >
                login
            </button>
            <button
                onClick={() => dispatch(sendCreateProfileRequest({
                    email,
                    password,
                    username,
                }))}
            >
                createAccount
            </button>
        </div>
    )
};