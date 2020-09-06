import { Injectable } from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly _userService: UserService,
        private readonly _jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this._userService.findOne(username);
        if (!user)
            return {};
        return user.password === password
            ? {
                username,
                _id: user._id
            }
            : {};
    }

    async login(user: any) {
        const payload = {username: user.username, sub: user.sub};
        return this._jwtService.sign(payload)
    }
}
