
import { React,Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Goal from './Goal/Goal';

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
const goals = this.state.goalList.map((goal, index) => {
  return <Goal goal = {goal} key={index} goalDone = {this.removeGoal.bind(this,goal)}/>
})





    return (
    
      <div className="App">
     
       <Input addGoal={this.addGoal.bind(this, this.state.currentGoal)} 
       currentGoal = {(e)=> this.setCurrentGoal(e)}  value={this.state.currentGoal} />
      {goals}


   
     
       
      </div>
    );
  }
 
}

export default App;
