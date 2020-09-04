import {Body, Controller, Get, Param, Post, Req} from "@nestjs/common";
import {Request, text} from "express";

import {ArticleService} from "./article.service";
import {Article, ArticlesListResponse, ArticlesResponse, CreateArticleRequest} from "../../../common/articles.types";
import {Response} from "../../../common/transport.types";

@Controller('api/articles')
export class ArticleController {
    constructor(private readonly _articleService: ArticleService) {
    }

    @Get('/main')
    async getArticlesList(): Promise<Response<ArticlesListResponse>> {
        const articles = await this._articleService.getArticleList();
        return {
            data: {
                articlesNames: articles.map(article => article.title)
            }
        };
    }

    @Get('/:id')
    async getArticles(@Param('id') id: string): Promise<Response<Article>> {
        const article = await this._articleService.getArticle(id);
        return {
            data: article
        }
    }
    
    @Post('')
    async createArticle(@Body() body: CreateArticleRequest): Promise<Response<Article>> {
        const {text, title} = body;
        const article = await this._articleService.createArticle(text, title);
        return {
            data: article
        };
    }
}
