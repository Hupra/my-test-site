import React, { useContext } from "react";
import { TestContext } from "./ContextExample";

const CompB = () => {
    const [msg, setMsg] = useContext(TestContext);

    console.log("CompB.js");

    return (
        <div>
            <hr />
            <div>CompB: {msg}</div>
            <input type="text" value={msg} onChange={e => setMsg(e.target.value)} />
        </div>
    );
};

export default CompB;
