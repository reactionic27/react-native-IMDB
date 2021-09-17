import {
  GET_ALL_MOVIES_REQUEST,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAILURE,
} from '../constants';
import { MovieState } from '../types';

const initialState: MovieState = {
  movies: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_MOVIES_REQUEST:
      return {
        ...state,
      };
    case GET_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_ALL_MOVIES_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
