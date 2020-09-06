import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {User, UserStatus} from "../../common/user.types";


@Schema()
export class UserModel extends Document implements User {
    @Prop()
    _id: string;

    @Prop({required: true})
    password: string;

    @Prop()
    avatar: string;

    @Prop()
    email: string;

    @Prop()
    status: UserStatus;

    @Prop({required: true})
    username: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);