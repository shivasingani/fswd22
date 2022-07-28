class Greetings extends React.Component{
    render(){
        return (
            <fragment> <h2> Class Component says - Hello!</h2></fragment>
        );
    }
}
ReactDOM.render(<Greetings/>,document.getElementById("mountNodeForClass"))

let FunGreeting = () =>{
    return(
        <fragment> <h2> Functional Component says - Hey! </h2></fragment>
    );
}
ReactDOM.render(<FunGreeting/>, document.getElementById("mountNodeForFun"));