//import logo from './logo.svg';
import './App.css';
import Greet1 from './components/Greetings';
import GreetingsProps from './components/GreetingsProps';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';
//import {Greetings1}  from './components/Greetings';

//when we add a default
      // -- we can import it directly without {}
      // -- we can give it a different name
      // {} will not work when importing the default functional component

//when we do not add default
      // we must access the component using {} - destructuring
      // we can use 'as', and it another name

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Are you okay reactJS?
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Welcome to ReactJS Training! 
        <Greet1 />
        <GreetingsProps name="John"/>
        <Counter/>
        <CounterClass />
      </header>
    </div>
  );
}

export default App;
