import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {Article, ArticleType} from "../../common/articles.types";

@Schema()
export class ArticleModel extends Document implements Article{
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    _id: string;

    @Prop({required: true})
    date: Date;

    @Prop({required: true})
    type: ArticleType;

    @Prop({required: true})
    text: string;
}

export const ArticleSchema = SchemaFactory.createForClass(ArticleModel);