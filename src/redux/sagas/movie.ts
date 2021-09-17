import { put, call, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  GET_ALL_MOVIES_REQUEST,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAILURE,
} from '../constants';
import { fetchMoviesAPI } from '../api';
import { PayloadType } from '../types';

function* getAllMovie({ payload }: PayloadType): SagaIterator {
  try {
    const response = yield call(fetchMoviesAPI);
    yield put({ type: GET_ALL_MOVIES_SUCCESS, payload: response.data.results });
  } catch (err) {
    yield put({ type: GET_ALL_MOVIES_FAILURE });
  }
}

export function* movieSaga(): SagaIterator {
  yield takeEvery(GET_ALL_MOVIES_REQUEST, getAllMovie);
}
