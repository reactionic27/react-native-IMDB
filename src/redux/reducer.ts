import { combineReducers, Reducer } from 'redux';

import movieReducer from './reducer/movie';

import { RootState } from './types';

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  movieState: movieReducer,
});

export default rootReducer;
