import { put, call, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  GET_ALL_MOVIES_REQUEST,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAILURE,
} from '../constants';
import { fetchMoviesAPI, fetchShowAPI } from '../api';
import { PayloadType } from '../types';

function* getAllMovie({ payload }: PayloadType): SagaIterator {
  let movieResponse: any = {};
  let showResponse: any = {};
  let errors;
  try {
    movieResponse = yield call(fetchMoviesAPI, payload.query);
  } catch (err) {
    errors = err;
  }
  try {
    showResponse = yield call(fetchShowAPI, payload.query);
  } catch (err) {
    errors = err;
  }
  yield put({
    type: GET_ALL_MOVIES_SUCCESS,
    payload: [...movieResponse.data.results, ...showResponse.data.results],
  });
  yield put({ type: GET_ALL_MOVIES_FAILURE });
}

export function* movieSaga(): SagaIterator {
  yield takeEvery(GET_ALL_MOVIES_REQUEST, getAllMovie);
}
