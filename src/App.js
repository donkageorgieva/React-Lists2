
import { React,Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Goal from './Goal/Goal';
import styled from 'styled-components';
import greenButton from './ButtonGreen/ButtonGreen.module.css'

class App extends Component {
  state = {
    currentGoal: '',
    goalList: [],
  
    

  }
  setCurrentGoal = (e) => {
    this.setState({currentGoal: e.target.value});
  
  
  }
  
 addGoal = (goal) => {
  const goalList = [...this.state.goalList];
  if (goal !== ''){
    goalList.push(goal);

    this.setState({goalList:goalList});
    

  } 

 }
 removeGoal = (goal) => {
  const goalList = [...this.state.goalList];
   const goalIndex = goalList.indexOf(goal);
   goalList.splice(goalIndex, 1);

    this.setState({goalList:goalList});
    

 }

  render(){
    const StyledDiv =     styled.div`
    {
      font-family: 'Helvetica', sans-serif;
      font-size: 25px;
      background-color: darksalmon;
      width: 100%;
      margin 0 auto;
      text-align: center;
      color: rgb(255, 239, 241);
     
    }
    
   `;
const goals = this.state.goalList.map((goal, index) => {
  return <Goal goal = {goal} key={index} goalDone = {this.removeGoal.bind(this,goal)}/>
})
let classes = [];
if (this.state.goalList.length <= 0){
  classes.push('pink');
}
if(this.state.goalList.length){
  classes.push('blue');
}
if(this.state.goalList.length >0 && this.state.goalList.length > 2){
  classes.push('bold');
}


    return (
    
  
     <StyledDiv>
       <Input addGoal={this.addGoal.bind(this, this.state.currentGoal)} 
       currentGoal = {(e)=> this.setCurrentGoal(e)}  value={this.state.currentGoal} />
      {goals}
      <button className={classes.join(' ')}>Sup</button>
      <button className = {greenButton.button}>Hi</button>
  

   
      </StyledDiv>
       
   
    );
  }
 
}

export default App;
