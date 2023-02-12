import { Exercice } from '../Interface/state'

function TableResults({ exercises } : { exercises: Exercice[], }) {
  return (
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
              <td>{firstNumber} * {secondNumber}</td>
              <td>{result}</td>
              <td>
                <span>&#10060; {realResult}</span>
              </td>
            </tr>  
          )
        })}
      </tbody>
    </table>      
  )
}

export default TableResults