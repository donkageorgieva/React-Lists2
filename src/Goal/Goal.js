import { React} from 'react';
import './Goal.css'
import redButton from '../ButtonRed/ButtonRed.module.css'
const goal = (props) => {

return(
  
    <li>
    <p>{props.goal}</p>
    <button onClick = {props.goalDone} className={redButton.button}>Done</button>
   
    </li>
)
}


export default goal;