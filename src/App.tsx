import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {reducer, initialState} from './state/state'
import Exercise from './Exercise'
import Results from './Results'

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { count, exercises, max } = state;
  
  return (
    <div className="App">
      {count < max && <Exercise state={state} dispatch={dispatch} />}
      {count >= max && <Results exercises={exercises} dispatch={dispatch} />}
    </div>
  )
}

export default App


