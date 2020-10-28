import React from 'react';
import './App.css';
import InputCardComponent from "./InputForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useLocation,useParams} from "react-router";
import ResultDialogComponents from "./ResultDialog";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/token">
                    <RouteComponents/>
                </Route>
                <Route path="/">
                    <InputCardComponent />
                </Route>
            </Switch>
        </Router>
    );
}


//to fetch the query param
function useQuery() {
    /**
     * useLocation.hash used for #& as starting
     * useLocation.search used for ? as starting
     */
    return new URLSearchParams(useLocation().hash);
}


//To route the components
function RouteComponents() {
    let query = useQuery();
    let accessToken = query.get("access_token");
    console.log(accessToken);
    return (
        <ResultDialogComponents accesstoken={accessToken}/>
    );
}

export default App;
