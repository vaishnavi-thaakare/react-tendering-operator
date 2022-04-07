import React from "react"
import ReactDOM from "react-dom"
import Component from "./component"



const App = () => {
    return (
        <div>
            <h1> Conditional Statement</h1>
            <Component/>
        </div>
        
    )
}





ReactDOM.render(<App/>,document.querySelector("#root"))