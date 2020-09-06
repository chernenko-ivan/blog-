import {LoginRequest, LoginResponse} from "../../common/login.types";
import {Response} from "../../common/transport.types";

export const login = (resp: LoginRequest) => {
    return fetch('/api/auth/login', {
        body: JSON.stringify(resp),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then<Response<LoginResponse>>(res => res.json())
};

export const createProfile = (resp: LoginRequest) => {
    return fetch('/api/auth/create-profile', {
        body: JSON.stringify(resp),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then<Response<LoginResponse>>(res => res.json())
};