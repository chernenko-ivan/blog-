import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {MongooseModule} from "@nestjs/mongoose";
import {UserModel, UserSchema} from "../../schemas/user.schema";
import {UsersController} from "./user.controller";

@Module({
    providers: [
        UserService
    ],
    imports: [
        MongooseModule.forFeature([
                {
                    name: UserModel.name, schema: UserSchema
                },
            ]
        ),
    ],
    exports: [
        UserService,
    ],
    controllers: [
        UsersController
    ]
})
export class UserModule {
}
