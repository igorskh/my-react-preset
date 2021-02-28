import React, { useState } from "react";
import Child from "./Child";

import "./Sample.css";

type AppProps = {
    title: string,
    number: number
}

const Sample = ({ title, number }: AppProps): JSX.Element => {
    const [counter, setCounter] = useState<number>(number);

    function changeCounter(diff: number) {
        setCounter(p => p + diff);
    }

    return (
        <div id="block">
            <h1>{title}</h1>
            <h2>Count is {counter}</h2>

            <Child text={"test"} />

            <button onClick={() => changeCounter(1)}>+1</button>
            <button onClick={() => changeCounter(-1)}>-1</button>
        </div>
    );
};

export default Sample;
