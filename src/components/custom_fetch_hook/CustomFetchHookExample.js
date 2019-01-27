import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
const loader = <Loader type="Triangle" color="black" height={30} width={30} />;

const useFetch = url => {
    const [data, setData] = useState();

    const fetchContent = async () => {
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json);
    };

    useEffect(() => {
        fetchContent();
    }, []);

    return data;
};

export default () => {
    const data = useFetch("https://randomuser.me/api/");

    const content = data ? <PrintPerson person={data.results[0]} /> : loader;

    return <div>{content}</div>;
};

const PrintPerson = ({ person }) => {
    return (
        <div>
            <div>firstname: {person.name.first}</div>
            <div>lastname: {person.name.last}</div>
            <hr />
            <pre>
                <code>{JSON.stringify(person, null, 4)}</code>
            </pre>
        </div>
    );
};
