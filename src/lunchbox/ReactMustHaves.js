import React from "react";

export default () => {
    return (
        <>
            <h2>VSCode plugins</h2>
            <ul>
                <li>Sass</li>
                <li>Prettier - Code formatter</li>
                <li>Sass Lint</li>
                <li>ESLint</li>
                <li>Auto Import</li>
            </ul>
            <h2>Global installs</h2>
            <ul>
                <li>npm install -g eslint</li>
            </ul>
            <h2>Npm installs</h2>
            <ul>
                <li>npm i react@16.7.0-alpha.2 --save</li>
                <li>npm i react-dom@16.7.0-alpha.2 --save</li>
                <li>npm i react-router-dom --save</li>
                <li>npm i node-sass --save</li>
                <li>npm i react-loader-spinner --save</li>
                <li>npm i react-helmet --save</li>
            </ul>
            <h2>Files to create:</h2>

            <blockquote>
                <label>.prettierrc</label>
                {"{"}
                <p>"usetabs": true,</p>
                <p>"tabWidth": 4,</p>
                <p>"printWidth": 110</p>
                {"}"}
            </blockquote>
        </>
    );
};
