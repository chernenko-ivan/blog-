import * as React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Main} from "../components/main";
import "./app.less";

export const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
};