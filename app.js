import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id: "parent"},[
    React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1",{},"This is Namaste React"),
        React.createElement("h2",{},"by Akshay"),
      ]),
      React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1",{},"This is Namaste React"),
        React.createElement("h2",{},"by Seena"),
      ]),
    ]
    );

const heading =  React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
    "hello world from React"
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);