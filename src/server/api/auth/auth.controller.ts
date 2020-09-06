import {Controller, UseGuards, Req, Post, Get, Res, Body} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {Request, Response} from "express";
import {JwtAuthGuard} from "./jwt-auth.guard";
import {LoginStatus} from "../../../common/login.types";
import {UserService} from "../user/user.service";

@Controller('api/auth')
export class AuthController {
    constructor(
        private readonly _authService: AuthService,
        private readonly _userService: UserService
    ) {
    }

    @Post('login')
    async login(@Body() body, @Res() res: Response) {
        const result = await this._authService.validateUser(body.username, body.password);
        if (result.username) {
            const token = await this._authService.login({user: body.username, password: body.password});
            res.cookie('Authorization', 'Bearer' + token);
            res.send({
                data: {
                    token
                }
            });
            return;
        }
        return;
    }

    @Post('create-profile')
    async createProfile(@Body() body, @Res() res: Response) {
        await this._userService.createUser(body);
        const token = await this._authService.login({user: body.username, password: body.password});
        res.cookie('Authorization', 'Bearer' + token);
        res.send({
            data: {
                token
            }
        });
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Req() req: Request) {
        return req.user;
    }
}
