import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserRequest, User} from "../../../common/user.types";


@Controller('/api/profile')
export class UsersController {
    constructor(private readonly _userService: UserService) {}

    @Get('/list')
    async getAllUsers() {
        return this._userService.getAll();
    }

    @Get('/:id')
    async getOneById(@Param('id') id: string) {
        return this._userService.findOne(id);
    }

    @Post('')
    async createUser(@Body() body: CreateUserRequest) {
        return this._userService.createUser(body);
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string) {
        return this._userService.deleteUser(id)
    }
}
