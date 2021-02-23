import { React} from 'react';
import './Goal.css';
const goal = (props) => {

return(
  
    <li>
    <p>{props.goal}</p>
    <button onClick = {props.goalDone}>Done</button>
   
    </li>
)
}


export default goal;