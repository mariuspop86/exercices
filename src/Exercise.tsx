import './App.css'

function Exercise({ state, dispatch }) {
  const { count, result, firstNumber, secondNumber, max } = state;
  
  return (
    <div>
      <div className="card">
        <p>Excercitiul {count + 1}</p>
        <span className="btn">{firstNumber}</span>
        <span className="sign">*</span>
        <span className="btn">{secondNumber}</span>
        <span className="sign">=</span>
        <input type="text" className="input" value={result} onChange={(e) => dispatch({type: 'solve', payload: e.target.value})} />
      </div>
      <div className="card">
        <button onClick={() => dispatch({type: 'next'})}>
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