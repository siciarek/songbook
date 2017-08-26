import axios from 'axios'
import {browserHistory as routerHistory} from 'react-router'

import {getAuthCheckConfig, handleForbidenAccess} from '../app/AppHelpers'
import config from '../app/config'

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
  GENRE_ITEM_UPDATE,
  GENRE_ITEM_REMOVE,
  GENRE_ITEM_REMOVE_FULFILLED,
  GENRE_ITEM_REMOVE_REJECTED,
} from './Genre'

export const fetchListGenre = (page = 1, onlyEnabled = false) => ({
  type: GENRE_LIST_FETCH,
  payload: axios.get(`${config.genreUrl}?page=${page}&enabled=${onlyEnabled ? 1 : 0}`)
})

export const fetchItemGenre = id => {

  return dispatch => {
    dispatch({type: GENRE_ITEM_FETCH})

    if (id === null) {
      dispatch({type: GENRE_ITEM_FETCH_FULFILLED, payload: null})
    }
    else {
      axios.get(`${config.genreUrl}/${id}`)
      .then((response) => {
        const data = {...response.data, category: response.data.category.id}
        dispatch({type: GENRE_ITEM_FETCH_FULFILLED, payload: data})
        return data
      })
      .catch((err) => {
        dispatch({type: GENRE_ITEM_FETCH_REJECTED, payload: err})
      })
    }
  }
}

export const saveGenre = data => {

  return dispatch => {

    if (typeof data.id !== 'undefined' && data.id !== null) {

      dispatch({type: GENRE_ITEM_SAVE})

      axios
      .put(`${config.genreUrl}/${data.id}`, data, getAuthCheckConfig())
      .then((response) => {
        dispatch({
          type: GENRE_ITEM_SAVE_FULFILLED,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({type: GENRE_ITEM_SAVE_REJECTED, payload: error})
        handleForbidenAccess(dispatch, error, `/genre/${data.id}/edit`)
      })
    }
    else {

      dispatch({type: GENRE_ITEM_ADD})

      axios
      .post(config.genreUrl, data, getAuthCheckConfig())
      .then((response) => {
        dispatch({
          type: GENRE_ITEM_ADD_FULFILLED,
          payload: response.data,
        })
        return response.data
      })
      .then(data => {
        routerHistory.replace(`/genre/${data.id}/edit`)
      })
      .catch(error => {
        dispatch({type: GENRE_ITEM_ADD_REJECTED, payload: error})
        handleForbidenAccess(dispatch, error, '/genre/list')
      })
    }
  }
}

export const removeGenre = (id) => {

  return dispatch => {
    dispatch({type: GENRE_ITEM_REMOVE})

    const url = `${config.genreUrl}/${id}`

    axios.delete(url, getAuthCheckConfig())
    .then((response) => {
      dispatch({
        type: GENRE_ITEM_REMOVE_FULFILLED,
        payload: response.data,
      })
    })
    .then(() => {
      routerHistory.replace('/genre/list')
    })
    .catch((error) => {
      dispatch({type: GENRE_ITEM_REMOVE_REJECTED, payload: error})
      handleForbidenAccess(dispatch, error, `/genre/${id}/edit`)
    })
  }
}