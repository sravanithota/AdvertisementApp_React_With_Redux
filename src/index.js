import ReactDOM from "react-dom";
import React from "react";
import {MySelf} from "./app/MySelf";
import {Header} from "./app/Header";

import {Router, Route, browserHistory, IndexRoute} from "react-router";
export class App extends React.Component {
    render() {
        return (

            <Router history={browserHistory}>
                <Route path="/" component={Header}/>
            </Router>


        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
