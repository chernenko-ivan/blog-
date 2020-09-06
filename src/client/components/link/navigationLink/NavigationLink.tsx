import * as React from "react";
import {FC} from "react";
import {NavigationLinkProps} from "./navigationLink.types";
import './navigationLink.styles.less'
import {CommonLink} from "..";

export const NavigationLink: FC<NavigationLinkProps> = props => {
    return <div className='navigationLink'>
        <CommonLink
            name={props.name}
            url={props.url}
        />
    </div>
};