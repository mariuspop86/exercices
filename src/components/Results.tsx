import { Dispatch, useEffect } from "react"
import { ActionTypes, ActionsTypes, Exercice } from "../Interface/state"
import { useNavigate } from "react-router-dom"
import ResultSwitcher from "./ResultSwitcher"

function Results({ dispatch, state } : { dispatch: Dispatch<ActionsTypes>, state: State, }) {
  const { count, max, exercises } = state;
  const navigate = useNavigate();

  const wrongAnswers = exercises.filter((row: Exercice) => {
    const { result, firstNumber, secondNumber } = row
    const res = parseInt(result);
    const realResult = firstNumber * secondNumber; 
    
    return res !== realResult
  })

  useEffect(() => {
    if (count != max ) {
      navigate("/");
    }
  }, [count, max]);

  return (
    <div className="results">
      <button onClick={() => {
        dispatch({type: ActionTypes.RESTART})
        navigate("/");
      }}>
        Restart
      </button>
      <div className="card">
        <ResultSwitcher exercises={wrongAnswers} />
      </div>
    </div>
  )
}

export default Results