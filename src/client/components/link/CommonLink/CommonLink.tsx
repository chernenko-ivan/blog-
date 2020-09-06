import * as React from "react";
import {FC} from "react";
import {Link} from "react-router-dom";
import {CommonLinkProps} from "./commonLink.types";
import * as cn from 'classnames';
import "./commonLink.styles.less";

export const CommonLink: FC<CommonLinkProps> = props => {
    return (
        <Link
            className={cn('link',
                props.className
            )}
            to={props.url}
        >
            {props.name}
        </Link>
    )
};