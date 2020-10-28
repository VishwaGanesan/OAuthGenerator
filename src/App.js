import React from 'react';
import './App.css';
import InputCardComponent from "./InputForm";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {useLocation} from "react-router";
import ResultDialogComponents from "./ResultDialog";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
                <Route exact path="/" component={RouteComponents} />
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


//To route the components based on query params
function RouteComponents() {
    let queryParams = useQuery();
    let accessToken = queryParams.get("access_token");
    let homeComponent = < InputCardComponent />;
    if(accessToken != null)
    {
        homeComponent = <ResultDialogComponents accesstoken={accessToken}/>
    }
    return (
        homeComponent
    );
}

export default App;
