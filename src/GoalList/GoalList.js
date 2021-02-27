import React from 'react';
import Goal from '../Goal/Goal'

const goalList = (props) => {


const goals = props.list.map((goal, index) => {
  return <Goal goal = {goal} key={index} goalDone = {props.goalDone.bind(null, goal)} />
})
return goals;
}


export default goalList;