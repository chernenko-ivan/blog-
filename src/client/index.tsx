import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import {store} from "./app/store";


const mount = () => {
    const App = require('./app/App').App;

    render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>,
        document.getElementById('root')
    )
};

mount();

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./app/App', mount)
}