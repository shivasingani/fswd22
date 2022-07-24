const jsDiv = document.getElementById("plainDiv");
const reactDiv = document.getElementById("reactDiv");

const renderThis = () =>{
  
   let str = `<div> 
        JS Div
        <input/>
        <p> ${new Date()} </p>
    </div>`
    jsDiv.innerHTML = str;

    let DivToRender = React.createElement(
        "div",null,
        React.createElement("input"),
        React.createElement("p",null,
        new Date().toString())
    );

    ReactDOM.render(DivToRender,reactDiv);
}

setInterval(renderThis,1000);


