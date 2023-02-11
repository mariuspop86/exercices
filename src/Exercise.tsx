import { Dispatch } from 'react'
import './App.css'
import { ActionTypes, ActionsTypes, State } from './Interface/state'

function Exercise({ state, dispatch }: {state: State, dispatch: Dispatch<ActionsTypes>}) {
  const { count, result, firstNumber, secondNumber, max } = state;
  
  return (
    <div>
      <div className="card">
        <p>Excercitiul {count + 1}</p>
        <span className="btn">{firstNumber}</span>
        <span className="sign">*</span>
        <span className="btn">{secondNumber}</span>
        <span className="sign">=</span>
        <input type="text" className="input" value={result} onChange={(e) => dispatch({type: ActionTypes.SOLVE, payload: e.target.value})} />
      </div>
      <div className="card">
        <button onClick={() => dispatch({type: ActionTypes.NEXT})}>
          Next
        </button>
        <p>
          Mai ai {max - count} exercitii.
        </p>
      </div>
    </div>
  )
}

export default Exercise