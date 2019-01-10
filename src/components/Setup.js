import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import ReactMustHaves from "../lunchbox/guides/ReactMustHaves";
import NodeServerSetup from "../lunchbox/guides/NodeServerSetup";

export default props => {
    const path = props.match.path;
    return (
        <div className="splitter">
            <div className="hlist">
                <NavLink to={path + "/react"}>React</NavLink>
                <NavLink to={path + "/react2"}>EMR</NavLink>
                <NavLink to={path + "/react3"}>Deploy</NavLink>
                <NavLink to={path + "/node-server-setup"}>Node Server Setup</NavLink>
            </div>
            <div>
                <Switch>
                    <Route path={path + "/react"} component={ReactMustHaves} />
                    <Route path={path + "/node-server-setup"} component={NodeServerSetup} />

                    <Route exact path={path} render={() => <Redirect to={path + "/react"} />} />
                    <Route render={() => <h2>404 page not found</h2>} />
                </Switch>
            </div>
        </div>
    );
};
