import React, { useState } from "react";

import "./App.scss";

type AppProps = {
    title: string,
    number: number
}

const App = ({ title, number }: AppProps): JSX.Element => {
    const [counter, setCounter] = useState<number>(number);

    function changeCounter(diff: number) {
        setCounter(p => p + diff);
    }

    return (
        <div id="block">
            <h1>{title}</h1>
            <h2>Count is {counter}</h2>

            <button onClick={() => changeCounter(1)}>+1</button>
            <button onClick={() => changeCounter(-1)}>-1</button>
        </div>
    );
};

export default App;
