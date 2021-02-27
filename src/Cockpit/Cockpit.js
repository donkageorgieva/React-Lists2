import React from 'react';
import Input from '../Input/Input';
import GoalList from '../GoalList/GoalList';


const cockpit = (props) => {
return (
    <div>
    <Input addGoal={props.addGoal} 
    currentGoal = {props.currentGoal}  value={props.value} />
   <GoalList list ={props.list} goalDone = {props.goalDone}/>
   <button className={props.classesOne}>Sup</button>
   <button className = {props.classesTwo}>Hi</button>
    </div>

)
}

export default cockpit;