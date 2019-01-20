import React, { useContext } from "react";
import { TestContext } from "./ContextExample";

const CompA = () => {
    const [msg, setMsg] = useContext(TestContext);

    console.log("CompA.js");

    return (
        <div>
            <hr />
            <div>CompA: {msg}</div>
            <input type="text" value={msg} onChange={e => setMsg(e.target.value)} />
        </div>
    );
};

export default CompA;
