let CounterButton = () => {
    const {useState} = React;
    let [c,setC] = useState(27);
    let onClickHandler = () =>{setC(++c)};
    return(
        <fragment>
        <button onClick={onClickHandler}>Click to Increment - { c } </button> <br/>
        </fragment>
    );
}
ReactDOM.render(<CounterButton />, document.getElementById("mountNode"));