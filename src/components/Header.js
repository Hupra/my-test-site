import React from "react";
import { Grid, Brick } from "../lunchbox/Grid";
import { NavLink } from "react-router-dom";

export default () => {
    return (
        <Grid columns={12} gutter={10} className="header" id="header">
            <Brick p={10} className="daniel">
                Daniel Lindholm
            </Brick>
            <Brick fill>
                <nav>
                    <NavLink exact to="/about">
                        About
                    </NavLink>
                    <NavLink exact to="/pages">
                        Pages
                    </NavLink>
                    <NavLink exact to="/github">
                        GitHub
                    </NavLink>
                    <NavLink exact to="/contact">
                        Contact
                    </NavLink>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </nav>
            </Brick>
        </Grid>
    );
};
