import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "../components/HelloWorld";

function App(){
    return(
        <fragment>
        <div> Hello from App! </div>
        <HelloWorld/>
        </fragment>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));