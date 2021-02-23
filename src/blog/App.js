import React from "react";
import ReactDOM from "react-dom";

function App() {
    return (
        <Card heading="The Republic" paragraph="This is just an example of a card"/>
    )
}

function Card() {
    return (
        <div>
            <h1>The Republic</h1>
            <p>This is just an example of a card</p>
        </div> 
    )
}