import { createReducer, on } from '@ngrx/store';
import * as counterActions from '../actions';

export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(counterActions.increment, state => state + 1),
  on(counterActions.decrement, state => state - 1),
  on(counterActions.reset, state => 0),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
