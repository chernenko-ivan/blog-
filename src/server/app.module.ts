import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {ConfigModule} from "@nestjs/config";
import {ArticleModule} from "./api/article/article.module";
import { AuthModule } from './api/auth/auth.module';
import { UserModule } from './api/user/user.module';
import * as path from "path";
import {MongooseModule} from "@nestjs/mongoose";


@Module({
    imports: [
        ConfigModule.forRoot({
            load: [
                () => ({
                    dataPath: path.resolve(__dirname, '..', '..', 'data')
                })
            ],
            isGlobal: true
        }),
        MongooseModule.forRoot('mongodb+srv://master:415065Qq@cluster0.ybqtf.mongodb.net/blog?retryWrites=true&w=majority'),
        ArticleModule,
        AuthModule,
        UserModule,
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {
}
