import React from 'react';
import mydata from '../data/Data.json';
import IdCardFun from './IdCardFun';

function IdCardsFun(props) {
    console.log(mydata);
    return (
        <div>
        {
         mydata.data.map( (elem) => {
                return <IdCardFun name={elem.name} des={elem.des} age={elem.age} id={elem.id}/>            
        })
        }
        </div>
    );
}

export default IdCardsFun;