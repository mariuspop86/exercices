import { generateRandomNumber } from '../utils'
import { ActionTypes, ActionsTypes, State  } from '../Interface/state'

const MAX_NUMBER = 30;

export const initialState: State = {
  count: 0,
  result: '',
  exercises: [],
  firstNumber: generateRandomNumber(6,10),
  secondNumber: generateRandomNumber(),
  max: MAX_NUMBER
};

export function reducer(state: State, action: ActionsTypes): State {
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
        max: MAX_NUMBER
      };
    default:
      return state;
  }
}