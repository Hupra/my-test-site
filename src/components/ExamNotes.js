import React from "react";

export default props => {
    const uri = window.location.origin;
    return (
        <>
            <h2>Exam Notes</h2>
            <h3>Static Javascript Pages</h3>
            <ul>
                <li>
                    <a href={uri + "/javascript-pages/calculator.html"}>Calculator</a>
                </li>
                <li>
                    <a href={uri + "/javascript-pages/map.html"}>Map</a>
                </li>
                <li>
                    <a href={uri + "/javascript-pages/dataGenerator.html"}>Data Generator</a>
                </li>
            </ul>
        </>
    );
};
