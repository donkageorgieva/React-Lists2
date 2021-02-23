import React from 'react';


const inputField = (props) => {

return (
    <div>
 <h1>What is your current goal?</h1>
    <input type ="text" onChange={props.currentGoal} value ={props.value} />
    <button onClick={props.addGoal} >Add Goal</button>
   
    </div>
   
)
}













export default inputField;