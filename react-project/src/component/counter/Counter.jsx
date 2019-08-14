import React,{Component} from 'react';
import './Counter.css';



 class Counter extends Component
{
    //Define a initial state in constructor
    //state of the constructor
    constructor()
    {
        super();//Error
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
    } 
    render(){
        return(<div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>
        <span className="count">{this.state.counter}</span>
        </div>)
    }

    increment(){

       // return(console.log('count'));
      // this.state.counter++;
       this.setState({
           counter:this.state.counter+this.props.by
       });
    }
}
/* 
function Counter ()
{
    
        return(
        <div className="counter">
        <button onClick={increment}>+1</button>
        <span className="count">0</span>
        </div>
        );
    
} */

 Counter.defaultProps={
     by:1
 }


export default Counter;