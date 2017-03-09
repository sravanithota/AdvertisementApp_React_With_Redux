import ReactDOM from "react-dom";
import React from "react";
import {SigninPage} from "./app/SigninPage";
import {Root} from "./app/Root";
import PartnersContainer from "./app/containers/PartnersContainer";
import {Provider} from 'react-redux';
import store from './app/store/store';
import CreateAdvertisementContainer from "./app/containers/CreateAdvertisementContainer";
import ActiveAdvertisementContainer from "./app/containers/ActiveAdvertisementContainer";
import {AdServerComponent} from "./app/components/AdServerComponent";



import "./app/styles/style.css";

import {Router, Route, browserHistory, IndexRoute} from "react-router";

export class App extends React.Component {
    render() {
        return (

            // <Router history={browserHistory}>
            //     <Route path={"/"} component={Root}>
            //         <IndexRoute component={SigninPage}/>
            //         <Route path={"signin"} component={SigninPage}/>
            //         <Route path={"second"} component={SecondPage}/>
            //
            //     </Route>
            //     <Route path={"/home"} component={Root}>
            //         <IndexRoute component={AdServerPage}/>
            //         <Route path={"adserver"} component={AdServerPage}/>
            //     </Route>
            //
            // </Router>

            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path={"/"} component={Root}>
                        <IndexRoute component={SigninPage}/>
                        <Route path={"signin"} component={SigninPage}/>
                        <Route path={"home"} component={AdServerComponent}/>
                        <Route path={"create"} component={CreateAdvertisementContainer}/>
                        <Route path={"partners"} component={PartnersContainer}/>
                        <Route path={"partners/:id"} component={ActiveAdvertisementContainer}/>


                    </Route>
                </Router>
            </Provider>


        );

    }
}
ReactDOM.render(<App />, document.getElementById('app'));
