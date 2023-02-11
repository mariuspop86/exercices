export interface State {
  count: number
  result: string
  exercises: Exercice[]
  firstNumber: number
  secondNumber: number
  max: number
};

export interface Exercice {
  firstNumber: number
  secondNumber: number
  result: string        
}

export enum ActionTypes {
  NEXT = 'next',
  SOLVE = 'solve',
  RESTART = 'restart',
}


export type SetNextAction = {
  type: typeof ActionTypes.NEXT
}

export type SetSolveAction = {
  type: typeof ActionTypes.SOLVE,
  payload: string
}

export type SetRestartAction = {
  type: typeof ActionTypes.RESTART
}

export type ActionsTypes = SetNextAction | SetSolveAction | SetRestartAction