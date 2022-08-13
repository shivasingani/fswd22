import React from 'react';

function IdCardFun(props) {
    return (
        <div className="card text-white bg-info w-25 mx-2 my-2 float-start">
        <div className="card-header bg-primary">{props.id} : {props.name} </div>
        <div className="card-body">
            <h4 className="card-title">{props.des}</h4>
            <p className="card-text">{props.age}</p>
        </div>
        </div>

    );
}

export default IdCardFun;