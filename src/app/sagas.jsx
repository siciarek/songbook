import {takeEvery, takeLatest, put, all} from 'redux-saga/effects'
import {PENDING, FULFILLED, REJECTED} from 'redux-promise-middleware'

import {
  APP_START_PROCESSING,
  APP_END_PROCESSING,
  APP_ERROR_OCCURRED,
  APP_ERROR_HIDE,
  APP_NOTIFICATION_OCCURRED,
} from './AppActionTypes'

import {
  GENRE_LIST_FETCH,
  GENRE_LIST_FETCH_FULFILLED,
  GENRE_LIST_FETCH_REJECTED,
  GENRE_ITEM_FETCH,
  GENRE_ITEM_FETCH_FULFILLED,
  GENRE_ITEM_FETCH_REJECTED,
  GENRE_ITEM_ADD,
  GENRE_ITEM_ADD_FULFILLED,
  GENRE_ITEM_ADD_REJECTED,
  GENRE_ITEM_SAVE,
  GENRE_ITEM_SAVE_FULFILLED,
  GENRE_ITEM_SAVE_REJECTED,
  GENRE_ITEM_UPDATE_FULFILLED,
  GENRE_ITEM_UPDATE_REJECTED,
  GENRE_ITEM_REMOVE,
  GENRE_ITEM_REMOVE_FULFILLED,
  GENRE_ITEM_REMOVE_REJECTED,
} from '../genre/Genre'

import {
  SONG_ITEM_SAVE,
  SONG_ITEM_REMOVE,
  SONG_ITEM_FETCH,
  SONG_ITEM_SAVE_FULFILLED,
  SONG_ITEM_SAVE_REJECTED,
  SONG_ITEM_FETCH_FULFILLED,
  SONG_ITEM_FETCH_REJECTED,
  SONG_ITEM_REMOVE_FULFILLED,
  SONG_ITEM_REMOVE_REJECTED,
} from '../song/Song'

import {
  LYRICS_LIST_FETCH,
  LYRICS_LIST_FETCH_FULFILLED,
  LYRICS_LIST_FETCH_REJECTED,
  LYRICS_ITEM_FETCH,
  LYRICS_ITEM_FETCH_FULFILLED,
  LYRICS_ITEM_FETCH_REJECTED,
} from '../lyrics/Lyrics'

import {
  AUTHOR_LIST_FETCH,
  AUTHOR_LIST_FETCH_FULFILLED,
  AUTHOR_LIST_FETCH_REJECTED,
  AUTHOR_ITEM_FETCH,
  AUTHOR_ITEM_FETCH_FULFILLED,
  AUTHOR_ITEM_FETCH_REJECTED,
} from '../author/Author'

import {
  ARTIST_LIST_FETCH,
  ARTIST_LIST_FETCH_FULFILLED,
  ARTIST_LIST_FETCH_REJECTED,
  ARTIST_ITEM_FETCH,
  ARTIST_ITEM_FETCH_FULFILLED,
  ARTIST_ITEM_FETCH_REJECTED,
} from '../artist/Artist'

import {
  USER_PROFILE_FETCH,
  USER_PROFILE_FETCH_FULFILLED,
  USER_PROFILE_FETCH_REJECTED,
  USER_DASHBOARD_FETCH,
  USER_DASHBOARD_FETCH_FULFILLED,
  USER_DASHBOARD_FETCH_REJECTED,
  USER_AUTH,
  USER_AUTH_FULFILLED,
  USER_AUTH_REJECTED,
  USER_UNAUTH,
  USER_UNAUTH_FULFILLED,
  USER_UNAUTH_REJECTED,
  USER_AUTH_CHECK,
  USER_SAVE,
  USER_SAVE_FULFILLED,
  USER_SAVE_REJECTED, USER_SAVE_PENDING,
} from '../user/User'

export function* runTheSpinner() {
  yield put({type: APP_START_PROCESSING})
}

export function* stopTheSpinner() {
  yield put({type: APP_END_PROCESSING})
}

export function* showError(action) {
  const payload = action.payload.hasOwnProperty('response') ? action.payload.response : action.payload
  yield put({type: APP_ERROR_OCCURRED, payload: payload})
}

export function* hideError() {
  yield put({type: APP_ERROR_HIDE})
}

export function* showNotification(action) {
  yield put({type: APP_NOTIFICATION_OCCURRED, payload: 'Operation succeed.'})
}

export function* watchErrors() {
  yield takeEvery(action => !action.type.startsWith(USER_AUTH_CHECK) && action.type.endsWith(REJECTED), showError)
  yield takeLatest(action => !action.type.startsWith(USER_AUTH_CHECK) && action.type.endsWith(FULFILLED), hideError)
}

export function* watchNotifications() {
  yield takeLatest([
    GENRE_ITEM_ADD_FULFILLED,
    GENRE_ITEM_SAVE_FULFILLED,
    USER_SAVE_FULFILLED,
  ], showNotification)
}

export function* watchTheSpinner() {
  yield takeEvery([
    USER_PROFILE_FETCH,
    USER_DASHBOARD_FETCH,
    SONG_ITEM_SAVE,
    SONG_ITEM_FETCH,
    SONG_ITEM_REMOVE,
    GENRE_ITEM_REMOVE,
    GENRE_ITEM_SAVE,
    GENRE_ITEM_ADD,
    GENRE_ITEM_FETCH,
    GENRE_LIST_FETCH,
    USER_AUTH,
    USER_UNAUTH,
    USER_AUTH_CHECK,
    USER_SAVE_PENDING,
    LYRICS_LIST_FETCH,
    LYRICS_ITEM_FETCH,
    AUTHOR_LIST_FETCH,
    AUTHOR_ITEM_FETCH,
    ARTIST_LIST_FETCH,
    ARTIST_ITEM_FETCH,
  ], runTheSpinner)

  yield takeLatest(action =>  action.type.endsWith(FULFILLED), stopTheSpinner)
  yield takeLatest(action =>  action.type.endsWith(REJECTED), stopTheSpinner)
}

export default function* rootSaga() {
  yield all([
    watchNotifications(),
    watchTheSpinner(),
    watchErrors(),
  ])
}