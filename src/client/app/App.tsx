import * as React from "react";
import {Route, Switch} from "react-router-dom";

import {Articles} from "../features/articles/Articles";
import {Main} from "../features/articles/components/Main";

export const App = () => {
    return (
        <Switch>
            <Route path='/articles'>
                <Articles/>
            </Route>
            <Route path='/'>
                <Main/>
            </Route>
        </Switch>
    )
};