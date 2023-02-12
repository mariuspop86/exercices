import { Exercice } from "../Interface/state"
import TableResults from "./TableResults"

function ResultSwitcher({ exercises } : { exercises: Exercice[] }) {
  if (exercises.length) {
    return (
      <div>
        <TableResults exercises={exercises} />    
        <span className="text-big">&#128078;</span> 
        <p>Wrong answers: {exercises.length}</p>
      </div>
    )
  }

  return (
    <div>
      <span className="text-big">&#127881;</span> 
      <p>Congratulations!</p>
    </div>  
  )
}

export default ResultSwitcher