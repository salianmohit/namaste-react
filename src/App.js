import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Counter from "./components/Counter";

// const parent = React.createElement("div",{id: "parent"},
//     [React.createElement("div",{id: "child1"},
//         [React.createElement("h1",{},"I'm the h1 tag"),React.createElement("h2",{},"I'm the h2 tag")])],
    
//     [React.createElement("div",{id: "child2"},
//             [React.createElement("h1",{},"I'm the h1 tag"),React.createElement("h2",{},"I'm the h2 tag")])]
    
//     );


//const heading = React.createElement("h1",{id:"heading"},"Hello World from React !!");

//React Element
// const jsxheading =(
//  <h1 id = "heading" className="head" tabIndex="1"> 
//  Hello This is react from JSX </h1>) ;

// //Reaction Functional Component

// const Title = () => (
//     <h1 id = "heading" className="head" tabIndex="1"> 
//     Hello This is react from JSX </h1>
//     ) ;

//  const reactElement = (
//     <h1 > 
//     Hello This is react Element  </h1>
//  )   ;
// const HeadingComponent = () => (
//  <div>
//     {reactElement}
//  <Title/>
//  <h2>{console.log("Below you can also write JavaScript inside")} </h2>
//  {100 + 200} 
//  <h1 className ="heading"> Namaste React Functional Component</h1>
//  </div>
// );


const AppLayout = () => {
    return (
    <div className="app">
    <Header />
    <Body />
    {/* <Counter/> */}
    </div>
    )
};

//console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);