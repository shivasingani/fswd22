class Greetings extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <fragment> <h2> Class Component says - Hello {this.props.name}!</h2></fragment>
        );
    }
}
ReactDOM.render(<Greetings name="Jane"/>,document.getElementById("mountNodeForClass"));

let FunGreeting = (props) =>{
    return(
        <fragment> <h2> Functional Component says - Hello {props.name}! </h2></fragment>
    );
}
ReactDOM.render(<FunGreeting name="John"/>, document.getElementById("mountNodeForFun"));