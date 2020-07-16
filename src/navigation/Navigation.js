import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LandingPage from "../component/landing_page/LandingPage";
import SecondPage from "../component/second_page/SecondPage";

function Routing() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/SecondPage' component={SecondPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;