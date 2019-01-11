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
            </nav>
        </header>
    );
};
