import React,{Component} from "react";
import Die from './Die'
class RollDice extends Component {
    constructor(props){
super(props)
this.state={
    num1:"one",
    num2:"one",
    isRolling:false
}
    }
    roll=()=>{
        const num=["one","two","three","four","five","six"]
        this.setState({
            isRolling:true,
            num1:num[Math.floor(Math.random()*6)],
            num2:num[Math.floor(Math.random()*6)],
        
        })
      
        
       setTimeout(() => {
        this.setState({isRolling:false})
          }, 1000);
         
    }
render(){

    return(
        <div style={{textAlign:"center"}}>
           <Die number={this.state.num1} animated={this.state.isRolling?"animate":""}/> 
           <Die number={this.state.num2} animated={this.state.isRolling?"animate":""}/> 
           
            <div>
            <button onClick={this.roll} disabled={this.state.isRolling}>{this.state.isRolling?"Rolling":"Roll me"}</button>
            </div>
        </div>
    )
}

}
export default RollDice