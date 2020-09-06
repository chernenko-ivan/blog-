export interface LoginRequest {
    username: string;
    email?: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export enum LoginStatus {
    LoginSuccess,
    WrongPassword,
}