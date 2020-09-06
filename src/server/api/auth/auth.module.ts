import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LocalStrategy} from "./local.strategy";
import {UserModule} from "../user/user.module";
import {PassportModule} from "@nestjs/passport";
import {AuthController} from './auth.controller';
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {JwtStrategy} from "./jwt.strategy";

@Module({
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
    imports: [
        UserModule,
        PassportModule,
        PassportModule.register({
            defaultStrategy: 'jwt',
        }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '60s'},
        })
    ],
    controllers: [AuthController]
})
export class AuthModule {
}
