import React, { useEffect, useState } from 'react';

function StateCheck() {
    let [counter,setCounter] = useState(0);
    let [anothercounter,setAnotherCounter] = useState(100);
    let clickHandler = () => {
        setCounter(++counter);
        /*if(counter%2 == 0){
            document.getElementById('changecolor').style.color='red';
        }else{
            document.getElementById('changecolor').style.color='blue';
        }*/
    }
        /* useEffect as constructor - called whenever the component loads*/
        useEffect( () => { 
            console.log("in useEffect");
        });

        useEffect( () => {if(counter%2 == 0){
            document.getElementById('changecolor').style.color='red';
        }else{
            document.getElementById('changecolor').style.color='blue';
        }
        if(anothercounter%3 == 0){
            document.getElementById('changecolor').style.color='green';
        }

        },[counter,anothercounter]);


    
    let anotherClickHandler = () => {
        setAnotherCounter(--anothercounter);
       /* if(anothercounter%3 == 0){
            document.getElementById('changecolor').style.color='green';
        }else{
            document.getElementById('changecolor').style.color='yellow';
        }*/
    }

    return (
        <div>
           <button onClick={clickHandler}> Click to Increment </button>
           <p> Incremented value is - {counter}</p>     
           <button onClick={anotherClickHandler}> Click to Decrement </button>
           <p> Incremented value is - {anothercounter}</p> 
           <h2 id="changecolor"> The color should change </h2>

        </div>
    );
}

export default StateCheck;