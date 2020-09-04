import { Injectable } from '@nestjs/common';
import {User} from "../../common/user.types";

@Injectable()
export class UserService {
    private readonly _users: User[];

    constructor() {
        this._users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'chris',
                password: 'secret',
            },
            {
                userId: 3,
                username: 'maria',
                password: 'guess',
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this._users.find(user => user.username === username);
    }
}
