const text = document.querySelector(".button");
// import "./scss/main.scss";


text.addEventListener("click", function(){
    console.log("is it working?!");

    const h1 = document.createElement("h1");
    h1.innerText = "Hello World! I have no idea what I'm doin...";
    document.querySelector("body").append(h1);
    
});



// import React, {Component} from "react";
// import ReactDOM from "react-dom";

// function App() {
//     return <h1>dupa</h1> ;
// }

// ReactDOM.render(<App/>, document.getElementById("div"));
// const h1 = document.createElement("h1");
// h1.innerText = "Hello World!";
// document.querySelector("body").append(h1);


