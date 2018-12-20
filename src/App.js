import React from "react";
import Header from "./components/Header";
import ExamplePage from "./components/ExamplePage.js";
import { Route } from "react-router-dom";
import { Grid, Brick } from "./lunchbox/Grid";

export default () => {
    return (
        <div>
            <Header />
            <Route exact path="/" component={ExamplePage} />
            <Route exact path="/about" render={() => <div>This is the about page</div>} />
            <Route
                exact
                path="/contact"
                render={() => (
                    <Grid columns={12} gutter={40} testing>
                        <Brick>Blah, blah, blah contact</Brick>
                    </Grid>
                )}
            />
        </div>
    );
};
