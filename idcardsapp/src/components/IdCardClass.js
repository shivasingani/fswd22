import React, { Component } from 'react';

class IdCardClass extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card text-white bg-info w-25 mx-2 my-2 float-start" id={this.props.id}>
            <div className="card-header bg-primary">{this.props.id} : {this.props.name} </div>
            <div className="card-body">
                <h4 className="card-title">{this.props.des}</h4>
                <p className="card-text">{this.props.age}</p>
            </div>
            </div>
        );
    }
}

export default IdCardClass;