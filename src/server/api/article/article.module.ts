import {Module} from "@nestjs/common";
import {ArticleService} from "./article.service";
import {ArticleController} from "./article.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {ArticleModel, ArticleSchema} from "../../schemas/article.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: ArticleModel.name, schema: ArticleSchema}])
    ],
    providers: [ArticleService],
    controllers: [ArticleController]
})
export class ArticleModule {
}
