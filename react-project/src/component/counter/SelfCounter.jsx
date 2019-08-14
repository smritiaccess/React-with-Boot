import React,{Component} from 'react';
import './Counter.css';


class SelfCounter extends Component
{

    constructor()
    {
        super();
        this.state={
            cnt:0
        }
        this.getMe=this.getMe.bind(this);
    }
    render()
    {

        return(<div className="selfCounter">Self
        <button onClick={this.getMe}>+1</button>
        <span className="cnt">{this.state.cnt}</span>
        
        </div>
        
      
        )
    }

    getMe()
    {
        console.log("increment here ");
        this.state.cnt++;
        this.setState({
            state:this.cnt+1
        });
    }
}


export default SelfCounter;