import { Dispatch, useRef, useEffect } from 'react'
import { ActionTypes, ActionsTypes, State } from '../Interface/state'

function Exercise({ state, dispatch }: {state: State, dispatch: Dispatch<ActionsTypes>}) {
  const inputRef = useRef(null);
  const { count, result, firstNumber, secondNumber, max } = state;

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return (
    <div>
      <div className="card">
        <p>Exercise {count + 1}</p>
        <span className="btn">{firstNumber}</span>
        <span className="sign">*</span>
        <span className="btn">{secondNumber}</span>
        <span className="sign">=</span>
        <input 
          type="text" 
          className="input" 
          value={result} 
          onChange={(e) => dispatch({type: ActionTypes.SOLVE, payload: e.target.value})} 
          ref={inputRef} 
          />
      </div>
      <div className="card">
        <button onClick={() => {
          dispatch({type: ActionTypes.NEXT})
          inputRef.current.focus()
        }}>
          Next
        </button>
        <p>
          Remaining {max - count} exersises.
        </p>
      </div>
    </div>
  )
}

export default Exercise