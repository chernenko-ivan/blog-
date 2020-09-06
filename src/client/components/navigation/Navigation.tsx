import * as React from "react";
import {FC} from "react";
import {LinkData} from "./navigation.types";
import {NavigationLink} from "../link";
import './navigation.styles.less'

const LINKS: LinkData[] = [
    {
        name: 'Profile',
        url: '/profile',
    },
    {
        name: 'Articles',
        url: '/articles'
    },
    {
        name: 'Authors',
        url: '/authors'
    }
];

export const Navigation: FC = () => {
    return <div className='navigation'>
        {
            LINKS.map(link => <NavigationLink
                key={link.name}
                name={link.name}
                url={link.url}
            />)
        }
    </div>
};