import * as React from 'react';
import {FC} from "react";

import {Article} from "../../../common/articles.types";

interface ArticleProps {
    article: Article;
}

export const ArticlePlate: FC<ArticleProps> = props => {
    return <div>
        {
            props.article.text
        }
    </div>
};