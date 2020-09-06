export interface User {
    _id: string;
    email?: string;
    password: string;
    username: string;
    avatar?: string;
    status?: UserStatus;
}

export enum UserStatus {
    Admin,
    Moderator,
    User,
}

export interface UserClient {
    id: string;
    email: string;
    username: string;
    avatar: string;
    status: UserStatus;
}

export interface CreateUserRequest {
    email: string;
    username: string;
    avatar?: string;
    status?: UserStatus;
    password: string;
}

export interface GetUserResponse {
    User: User;
}
