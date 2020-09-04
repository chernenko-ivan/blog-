import * as React from "react";
import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch, RootState} from "../../app/store";
import {Article} from "../../../common/articles.types";
import {ArticlePlate} from "../../components/Article/Article";
import {fetchArticles} from './articles.slice';

export const Articles: FC = () => {
    const dispatch = useDispatch<Dispatch>();
    const articles = useSelector<RootState, Article[]>(state => {
        return state.articlesReducer.articles;
    });

    useEffect(() => {
        dispatch(fetchArticles());
    }, []);

    return (
        <div>
            {
                articles.map(article => <ArticlePlate
                        key={article._id}
                        article={article}
                    />
                )
            }
        </div>
    )
};