import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import * as cookieParser from 'cookie-parser';
import * as path from "path";

async function bootstrap() {
    const app: NestExpressApplication = await NestFactory.create(AppModule);
    const isDevelopment = process.env.MODE === 'development';
    app.setBaseViewsDir(path.join(__dirname, 'views'));
    app.set('view engine', 'js');
    app.use(cookieParser());
    app.enableCors();
    app.engine('js', require('express-react-views').createEngine());
    await app.listen(3000);
}

bootstrap()
    .catch(e => console.log(e));
