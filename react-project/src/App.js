import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import SelfCounter from "./component/counter/SelfCounter";
import Counter  from "./component/counter/Counter";
import ToDoApp from './component/360view/ToDoApp';
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

class App extends Component
{
  render(){
    return(
    <div className="App">
      My Hello world 
     <ToDoApp/>
    </div>);
  }
}
export default App;




