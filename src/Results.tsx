import './App.css'
import { v4 as uuidv4 } from 'uuid';

function Results({ dispatch, exercises }) {
  const storage = JSON.parse(localStorage.getItem("exercises")) || [];
  storage.push({
    id: uuidv4(),
    exercises
  })
  localStorage.setItem("exercises", JSON.stringify(storage));

  return (
    <div className="results">
      <button onClick={() => dispatch({type: 'restart'})}>
        Reincepe
      </button>
      <div className="card">
        <table className="table-auto table">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Exercitiu</th>
              <th>Raspuns</th>
              <th>Corect</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((row, index) => 
              <tr key={index}>
                <td>{index+1}</td>
                <td>{row.firstNumber} * {row.secondNumber}</td>
                <td>{row.result}</td>
                <td>
                  {row.result == row.firstNumber*row.secondNumber && <span>&#9989;</span>}
                  {row.result != row.firstNumber*row.secondNumber && <span>&#10060; {row.firstNumber*row.secondNumber}</span>}
                </td>
              </tr>  
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Results