import {Injectable} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {InjectModel} from "@nestjs/mongoose";
import {ArticleModel} from "../../schemas/article.schema";
import {Model, Types} from "mongoose";
import {Article, ArticleType} from "../../../common/articles.types";

@Injectable()
export class ArticleService {
    constructor(
        private readonly _configService: ConfigService,
        @InjectModel(ArticleModel.name) private readonly _articleModel: Model<ArticleModel>
    ) {}

    async getArticle(id: string): Promise<Article | undefined> {
        return this._articleModel.findById(id);
    }

    async getArticleList(): Promise<Article[] | undefined> {
        return this._articleModel.find().exec();
    }

    async createArticle(text: string, title: string): Promise<Article> {
        return new this._articleModel({
            title,
            text,
            date: new Date(),
            type: ArticleType.Code,
            _id: Types.ObjectId()
        }).save();
    }
}
