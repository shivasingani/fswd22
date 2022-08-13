import React from "react";

export default class CounterClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={counter:0};
        //this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler = () => {
        //this.state.counter = this.state.counter + 1;
        let c = this.state.counter;
        this.setState({counter:++this.state.counter});
    }
    render(){
        
        return(
        <div>       
        <button onClick={this.onClickHandler}>Click to increment</button>
        {this.state.counter}
        </div>
        );
    }
}



