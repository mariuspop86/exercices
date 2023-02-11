import { generateRandomNumber } from '../utils'
import { ActionTypes, ActionsTypes, State  } from '../Interface/state'

export const initialState: State = {
  count: 0,
  result: '',
  exercises: [],
  firstNumber: generateRandomNumber(6,10),
  secondNumber: generateRandomNumber(),
  max: 4
};

export function reducer(state: State, action: ActionsTypes): State {
  console.log(action.type)
  switch (action.type) {
    case ActionTypes.NEXT:
      if (state.count >= state.max) {
        return state
      }
      const { exercises, firstNumber, secondNumber, result } = state
      exercises.push(
        {
          firstNumber,
          secondNumber,
          result
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
    case ActionTypes.SOLVE:
      return {
        ...state,
        result: action.payload
      }
    case ActionTypes.RESTART:
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