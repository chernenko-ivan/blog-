import * as React from "react";
import {FC} from "react";

import './avatar.styles.less'
import {AvatarProps} from "./avatar.types";

export const Avatar: FC<AvatarProps> = (props) => {
    return (
        <div>
            <div>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div>
                <div>
                    {props.email}
                </div>
                <div>
                    {props.userName}
                </div>
            </div>
        </div>
    )
};