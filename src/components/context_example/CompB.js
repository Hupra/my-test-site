import React, { useContext } from "react";
import { TestContext } from "./ContextExample";

export default () => {
    const [msg, setMsg] = useContext(TestContext);

    console.log("CompB.js");

    return (
        <>
            <div>CompB: {msg}</div>
            <input type="text" value={msg} onChange={e => setMsg(e.target.value)} />
        </>
    );
};
