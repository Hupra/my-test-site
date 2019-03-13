import React from "react";

export default () => {
    return (
        <>
            <h2>Mocha</h2>
            <ul className="notes">
                <li>
                    <p>npm i mocha -g</p>
                    <p>npm init -y</p>
                    <p>npm i chai --save-dev</p>
                </li>
            </ul>
            <blockquote>
                <label>.prettierrc</label>
                {"{"}
                <p>"usetabs": true</p>
                {"}"}
            </blockquote>
        </>
    );
};
