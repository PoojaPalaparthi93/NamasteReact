import React from 'react';
import ReactDOM from 'react-dom';

// Creating H1 tag using core react syntax
// createElement is an object
const parent = React.createElement("h1", { id:"home" }, "hello sureshpooja");


// To append the above H1 tag on to the web page, target the div=root from index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the parent(H1) element using root
// It is replaced with the elements of the div tag with id root
root.render(parent);