import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import { qfetch } from "../lunchbox/tools.js";
import { Link } from "react-router-dom";

const loader = <Loader type="Triangle" color="black" height={30} width={30} />;

const Repository = props => {
    //find current ending of current path NEEDS TESTING WHEN DEPLOYED
    const curPath = props.location.pathname.substring(props.match.path.length + 1);

    const [repo, setRepo] = useState("No Repository Selected");

    const fetchData = async name => {
        setRepo(loader);
        const content = await qfetch("https://api.github.com/repos/Cphdat3sem2018f/" + name);

        const displayThis = (
            <div>
                <div>ID: {content.id}</div>
                <div>Full name: {content.full_name}</div>
                <div>Size: {content.size}</div>
            </div>
        );

        setRepo(displayThis);
    };

    useEffect(
        () => {
            // only fetch if pathname is valid
            if (curPath) fetchData(curPath);
        },
        [curPath]
    );

    return repo;
};

export default () => {
    const [repos, setRepos] = useState(loader);

    const fetchData = async () => {
        setRepos(loader);

        const content = await qfetch("https://api.github.com/orgs/Cphdat3sem2018f/repos");
        let orderedData = "Database failure";

        if (Array.isArray(content)) {
            orderedData = content.map(e => (
                <li key={e.id}>
                    <Link to={`/repositories/${e.name}`}>{e.name}</Link>
                </li>
            ));
        }

        setRepos(<ul>{orderedData}</ul>);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h2>Repositories</h2>
            <p>
                Complete this example to fecth the git-repositories (via link provided in the exercise), and
                populate the ul below with the name for each repository.
            </p>
            <hr />

            <div className="splitter">
                <div>
                    <h3>All repositories:</h3>
                    {repos}
                </div>
                <div>
                    <h3>Selected repository:</h3>
                    <Route name="repositories/:value" component={Repository} />
                </div>
            </div>
        </>
    );
};
