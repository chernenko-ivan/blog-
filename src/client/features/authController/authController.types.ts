export interface AuthControllerState {
    isAuthenticated: boolean;
    loading: boolean;
    avatar?: string;
    email?: string;
    username?: string;
}

export interface FetchAuthSuccess {
    isAuthenticated: boolean;
    avatar?: string;
    email?: string;
    username?: string;
}