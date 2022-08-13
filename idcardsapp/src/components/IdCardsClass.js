import React, { Component } from 'react';
import mydata from '../data/Data.json';
import IdCardClass from './IdCardClass';

class IdCardsClass extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div> <h1>ID Cards from Class Component</h1> 
                 {
            mydata.data.map( (elem) => {
                return <IdCardClass name={elem.name} des={elem.des} age={elem.age} id={elem.id}/>            
            })
             }
            </div>
        );
    }
}

export default IdCardsClass;