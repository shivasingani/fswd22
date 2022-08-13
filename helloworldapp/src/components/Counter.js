import React from "react";
import {useState} from 'react';


export default function Counter(){

    let [count,setCount] = useState(0);

    let onClickHandler =() => {
        count++;
        setCount(count);
    }

    return(
        <div>        
        <button onClick={onClickHandler}>Click to increment</button>
        {count}
        </div>
    );
}