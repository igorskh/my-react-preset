import React from "react";

type Props = {
    text: string
}

const Child = ({text}: Props): JSX.Element => {
    return (
        <div>
            <p>{text}</p>
        </div>
    );
};

export default Child;
