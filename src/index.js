import React from "react";
import ReactDOM from "react-dom";

const elem = React.createElement("div", {
    className: "test-div",
    children: "Hello"
});

ReactDOM.render(elem, document.getElementById("root"));
