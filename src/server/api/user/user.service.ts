import { Injectable } from '@nestjs/common';
import {CreateUserRequest, User} from "../../../common/user.types";
import {InjectModel} from "@nestjs/mongoose";
import {UserModel} from "../../schemas/user.schema";
import {Model} from "mongoose";

@Injectable()
export class UserService {
    private readonly _users: User[];

    constructor(@InjectModel(UserModel.name) private readonly _userModel: Model<UserModel>) {}

    async findOne(username: string): Promise<User | undefined> {
        return this._userModel.findOne({username}).exec();
    }

    async getAll(): Promise<User[] | undefined> {
        return this._userModel.find().exec();
    }

    async createUser(user: CreateUserRequest): Promise<User | undefined> {
        return new this._userModel({...user, _id: new Date().valueOf()}).save();
    }

    async deleteUser(id: string): Promise<User> {
        return this._userModel.findOneAndRemove((user: User) => user._id === id).exec();
    }
}
