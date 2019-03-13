import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
    return (
        <header className="beauty_header">
            <div className="logo_box">hupra.dk</div>

            <nav className="nav1">
                <NavLink exact to="/">
                    Home
                </NavLink>
                <NavLink to="/setup">Setup</NavLink>
                <NavLink to="/repositories">Repositories</NavLink>
                <NavLink to="/exam-notes">Exam Notes</NavLink>
                <NavLink to="/context-example">Context Example</NavLink>
                <NavLink to="/custom-fetch-hook-example">Custom Fetch Hook Example</NavLink>
                <NavLink to="/dummy">Dummy</NavLink>
            </nav>
        </header>
    );
};
