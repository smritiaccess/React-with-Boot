import React,{Component} from 'react';
import "./ToDoApp.css";
class ToDoApp extends Component
{
    render(){
        return(<div className="todo">Todo Application!!!!!
        <LoginComponent/>
        </div>)
    }
}

class TestComponent extends Component
{
   render(){
       return(<div className="div1">Check</div>)
   }
}

class LoginComponent extends Component
{
    constructor(props)
    {
       super(props)

       this.state={ 
           username:'Test',
           password:''
       }
      // this.userNameChange=this.userNameChange.bind(this);
      // this.passwordControl=this.passwordControl.bind(this);
      this.userNamePassControl=this.userNamePassControl.bind(this);
    }
    render()
    {
        return(<div className="loginComponent">
            UserName: <input type="text" name="username" value={this.state.username} onChange={this.userNamePassControl}/>
            Password:<input type="text" name="password" value={this.state.password} onChange={this.userNamePassControl}/>
           <button>Logme</button>
        </div>)
    }

//old approach
    userNameChange(event)
    {
        console.log(event.target.value);
        console.log(event.target.name);
        //this.setState({username:event.target.value});
        //we are actually assigning the value of changing text to its object (that is why we gave [])
        this.setState({
           [event.target.name]:event.taget.value
        })
     
    }
    //old approach
    passwordControl(event)
    {
        console.log(event.target.value);
        this.setState({password:event.target.value});
    }

    userNamePassControl(event)
    {
        console.log(event.taget.value);
        this.setState({
            [event.taget.name]:event.taget.value
        });
    }
}
export default ToDoApp;