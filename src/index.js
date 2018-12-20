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
            <title>Daniels Site</title>
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

const cc = () => {
    let num = 50;
    let countUp = true;

    const ccc = () => {
        if (num > 75) countUp = false;
        if (num < 25) countUp = true;

        num += countUp ? 1 : -1;

        document.getElementById("header").style.background = `linear-gradient(90deg, rgba(255,25,25,0.${100 -
            num}), rgba(255,25,25,0.50), rgba(255,25,25,0.${num})`;
    };

    setInterval(ccc, 150);
};
cc();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
