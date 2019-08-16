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
           username:'',
           password:'',
           hasLoginFailed:false,
           showSuccess:false
       }
      // this.userNameChange=this.userNameChange.bind(this);
      // this.passwordControl=this.passwordControl.bind(this);
      this.handleChangeEvent=this.handleChangeEvent.bind(this);
      this.loginClick=this.loginClick.bind(this);
    }
    render()
    {
        return(<div className="loginComponent">
           {/* <ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed}/> */}
           {this.state.hasLoginFailed && <div> Invalid Credentia</div>}
          {/*  <ShowSuccessOnValid showSuccess={this.state.password}/> */}
          {this.state.password && <div>Success!!!!!!!!!!!!!!!</div>}
            UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChangeEvent}/>
            Password:<input type="text" name="password" value={this.state.password} onChange={this.handleChangeEvent}/>
           <button onClick={this.loginClick}>Logme</button>
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

    handleChangeEvent(event)
    {
        console.log(event.target.name);
        this.setState({
            [event.target.name]
            :event.target.value
        })
    }

    loginClick(event)
    {
        console.log(this.state);
        if(this.state.username==="dummy" && this.state.password=="dummy")
           
           {
            console.log("Sucessfull");
               this.setState({
                   hasLoginFailed:false,
                   showSuccess:true
               })
           }
           else
           {
               this.setState({
                hasLoginFailed:true,
                showSuccess:false
               })
               
           }
           //console.log("Failed");
    }
}

class WelcomeComponent extends Component
{
    render()
    {
        return(<div>Welcome Component </div>)
    }
}

function ShowSuccessOnValid(props)
{
    if(props.showSuccess)
{ 
    return <div>Success....</div>
}
return null;
}
function ShowInvalidCredential(props)
{
    console.log("Inside");
    if(props.hasLoginFailed)
    {
        return <div>Invalid</div>
    }
    return null;
}
export default ToDoApp;
