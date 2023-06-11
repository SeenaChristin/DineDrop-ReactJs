import React from "react";
import ReactDOM from "react-dom/client";

//CORE REACT WAY OF CREATING ELEMENTS

// const parent = React.createElement(
//     "div",
//     {id: "parent"},[
//     React.createElement(
//         "div",
//         {id:"child"},[
//         React.createElement("h1",{},"This is Namaste React"),
//         React.createElement("h2",{},"by Akshay"),
//       ]),
//       React.createElement(
//         "div",
//         {id:"child"},[
//         React.createElement("h1",{},"This is Namaste React"),
//         React.createElement("h2",{},"by Seena"),
//       ]),
//     ]
//     );

// const heading =  React.createElement(
//     "h1",
//     {id:"heading",xyz:"abc"},
//     "hello world from React"
//     );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// const jsxheading = (<h1 id="heading" className="head" tabIndex="5">
//     Namaste React by Seena Christin.
//     </h1> 
// );
const Title = ()=> (<h1 id="title">Namaste React</h1>);

const Description = () =>(
    <div id="des">
        <Title/>
        <h2 className="descrip">by Seena Chrsitin.</h2>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Description/>);