import React, { createContext, useState } from "react";
import CompA from "./CompA";
import CompB from "./CompB";

export const TestContext = createContext();

export default () => {
    //make state here if you want this component to update on change

    console.log("ContextExample.js");

    return (
        <ContextContainer>
            <h3>Shared state between CompA and CompB</h3>
            <hr />
            <CompA />
            <hr />
            <CompB />
        </ContextContainer>
    );
};

const ContextContainer = ({ children }) => {
    const state = useState("start msg");
    return <TestContext.Provider value={state}>{children}</TestContext.Provider>;
};
