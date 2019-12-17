// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';



const express = require("express")
const app = express();

app.listen(3000, () => {
console.log("Server is alive");
console.log("Listening on Port 3000");
console.log("Brought to you by Server Radio")
console.log("The radio for all server loving servers")
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function Get(url){
    let Httppreq = new XMLHttpRequest();
    Httppreq.open("GET",url,false);
    Httppreq.send(null);
    return Httppreq.responseText;
}

