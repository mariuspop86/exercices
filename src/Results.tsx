import { Dispatch } from 'react'
import { ActionTypes, ActionsTypes, Exercice } from './Interface/state'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

function Results({ dispatch, exercises } : { dispatch: Dispatch<ActionsTypes>, exercises: Exercice[] }) {
  // const storage: [] = JSON.parse(localStorage.getItem("exercises") || '') || [];
  // storage.push({
  //   id: uuidv4(),
  //   exercises
  // })
  // localStorage.setItem("exercises", JSON.stringify(storage));

  return (
    <div className="results">
      <button onClick={() => dispatch({type: ActionTypes.RESTART})}>
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
            {exercises.map((row: Exercice, index: number) => {
              const { result, firstNumber, secondNumber } = row
              const res = parseInt(result);
              const realResult = firstNumber * secondNumber; 

              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{row.firstNumber} * {row.secondNumber}</td>
                  <td>{row.result}</td>
                  <td>
                    {res === realResult && <span>&#9989;</span>}
                    {res !== realResult && <span>&#10060; {realResult}</span>}
                  </td>
                </tr>  
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Results