import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { Grid, Brick } from "../lunchbox/Grid";
import { qfetch } from "../lunchbox/tools.js";

export default () => {
    const loader = <Loader type="Triangle" color="black" height={20} width={20} />;

    const [data, setData] = useState(loader);

    const fetchData = async () => {
        setData(loader);

        const content = await qfetch("https://randomuser.me/api/");

        const [person] = content.results;
        const { first, last, title } = person.name;

        setData(`${title} ${first} ${last}`);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Grid gutter={10} columns={12}>
            <Brick>Fetched person:</Brick>
            <Brick>{data}</Brick>
            <Brick w={12}>
                <button onClick={fetchData} style={{ padding: `10px 20px` }}>
                    Fetch New Person
                </button>
            </Brick>
        </Grid>
    );
};
