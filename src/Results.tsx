import { Dispatch } from 'react'
import { ActionTypes, ActionsTypes, Exercice } from './Interface/state'
import './App.css'
import { useNavigate } from "react-router-dom";


function Results({ dispatch, exercises } : { dispatch: Dispatch<ActionsTypes>, exercises: Exercice[] }) {
  const navigate = useNavigate();

  return (
    <div className="results">
      <button onClick={() => {
        dispatch({type: ActionTypes.RESTART})
        navigate("/");
      }}>
        Restart
      </button>
      <div className="card">
        <table className="table-auto table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Exercice</th>
              <th>Response</th>
              <th>Status</th>
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