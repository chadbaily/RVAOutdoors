import { Action, createReducer, on } from '@ngrx/store';
// import * as ScoreboardPageActions from '../actions/scoreboard-page.actions';

export interface State {
  home: number;
  away: number;
}
