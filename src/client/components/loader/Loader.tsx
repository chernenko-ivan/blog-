import * as React from 'react';
import {FC} from "react";

import LoaderSVG from '../../imgs/loaders/black-loader.svg';

export const Loader: FC = () => {
    return <div>
        <img src={LoaderSVG} alt="Loader"/>
    </div>
};