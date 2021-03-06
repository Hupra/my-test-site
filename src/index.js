import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./lunchbox/default.sass";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Helmet } from "react-helmet";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
    <>
        <Helmet>
            <title>{React.version}</title>
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
                integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
                crossOrigin="anonymous"
            />
        </Helmet>
        <Router>
            <App />
        </Router>
    </>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
