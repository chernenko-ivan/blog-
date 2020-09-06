import * as React from "react";
import {FC} from "react";
import {Route, Switch} from "react-router-dom";
import {Profile} from "../../features/profile";
import './main.styles.less'
import {Login} from "../../features/login";

export const Main: FC = () => {
    return (
        <div className='main'>
            <Switch>
                <Route path='/profile'>
                    <Profile/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
            </Switch>
        </div>
    )
};