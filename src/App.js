import React from "react";
import Header from "./components/Header";
import ExamplePage from "./components/ExamplePage.js";
import { Route } from "react-router-dom";
import { Grid, Brick } from "./lunchbox/Grid";
import Setup from "./components/Setup";
import Repositories from "./components/Repositories";
import ExamNotes from "./components/ExamNotes";

export default () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Route exact path="/" component={ExamplePage} />
                <Route path="/setup" component={Setup} />
                <Route path="/repositories" component={Repositories} />
                <Route path="/exam-notes" component={ExamNotes} />

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
        </div>
    );
};
