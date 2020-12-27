/**
 * @function ExampleComponent
 * @param {string} text
 */

import React from "react";

export type Props = { text: string };

function TestModule (props: Props) {

    const { text } = props;

    return <div style={{ color: "red" }} id={"textElement"} role={"mainContent"}>Hello {text}</div>;

}

export default TestModule;