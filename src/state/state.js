import {generateRandomNumber} from '../utils'

export const initialState = {
  count: 0,
  result: '',
  exercises: [],
  firstNumber: generateRandomNumber(6,10),
  secondNumber: generateRandomNumber(),
  max: 4
};

export function reducer(state, action) {
  console.log(action.type)
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      };
    case 'next':
      if (state.count >= state.max) {
        return state
      }
      const { exercises } = state
      exercises.push(
        {
          firstNumber: state.firstNumber,
          secondNumber: state.secondNumber,
          result: state.result
        }
      )

      return {
        ...state,
        count: state.count + 1,
        result: '',
        exercises,
        firstNumber: generateRandomNumber(6,10),
        secondNumber: generateRandomNumber()
      };
    case 'solve':
      return {
        ...state,
        result: action.payload
      }
    case 'restart':
      return {
        count: 0,
        result: '',
        exercises: [],
        firstNumber: generateRandomNumber(6,10),
        secondNumber: generateRandomNumber(),
        max: 4
      };
    default:
      throw new Error();
  }
}