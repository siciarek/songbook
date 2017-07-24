import axios from 'axios'
import queryString from 'query-string'
import {browserHistory as routerHistory} from 'react-router'
import {getAuthCheckConfig} from '../app/AppHelpers'
import config from '../app/config'

import {
  TEST_LIST_FETCH,
  TEST_LIST_FETCH_FULLFILLED,
  TEST_LIST_FETCH_REJECTED,
  TEST_ITEM_FETCH,
  TEST_ITEM_FETCH_FULLFILLED,
  TEST_ITEM_FETCH_REJECTED,
} from './Test'

import {
  AUTHOR_ITEMS_SWAP,
  AUTHOR_ITEMS_SWAP_FULLFILLED,
  AUTHOR_ITEMS_SWAP_REJECTED,
} from '../author/Author'

import {
  ARTIST_ITEMS_SWAP,
  ARTIST_ITEMS_SWAP_FULLFILLED,
  ARTIST_ITEMS_SWAP_REJECTED,
} from '../artist/Artist'

import {
  APP_SET_TARGET_ROUTE
} from '../app/AppActionTypes'


export const swapListItems = (modelName, src, trg, onError) => {

  const models = {
    author: {
      url: config.authorUrl,
      pending: AUTHOR_ITEMS_SWAP,
      fullfilled: AUTHOR_ITEMS_SWAP_FULLFILLED,
      rejected: AUTHOR_ITEMS_SWAP_REJECTED,
    },
    artist: {
      url: config.artistUrl,
      pending: ARTIST_ITEMS_SWAP,
      fullfilled: ARTIST_ITEMS_SWAP_FULLFILLED,
      rejected: ARTIST_ITEMS_SWAP_REJECTED,
    }
  }

  if(false === models.hasOwnProperty(modelName)) {
    throw `Model "${modelName}" is not supported.`
  }

  const model = models[modelName]

  return (dispatch) => {

    const url = `${model.url}/${src.id}?${queryString.stringify({swap: trg.id})}`

    dispatch({type: model.pending, payload: [src, trg]})

    axios.put(url, {}, getAuthCheckConfig())
    .then((response) => {
      dispatch({type: model.fullfilled})
    })
    .catch((error) => {
      dispatch({type: model.rejected, payload: error})
      onError()

      if (error.hasOwnProperty('response') && error.response.status === 401) {
        dispatch({type: APP_SET_TARGET_ROUTE, payload: `${model.url}`})
        routerHistory.replace('/login')
      }
    })

  }
}

export const fetchTestList = () => {

  return (dispatch) => {
    dispatch({type: TEST_LIST_FETCH})

    axios.get(config.artistUrl)
    .then((response) => {
      dispatch({type: TEST_LIST_FETCH_FULLFILLED, payload: response.data})
    })
    .catch((err) => {
      dispatch({type: TEST_LIST_FETCH_REJECTED, payload: err})
    })
  }
}


export const fetchTestItem = (id) => {
  return (dispatch) => {
    dispatch({type: TEST_ITEM_FETCH})

    axios.get(`${config.artistUrl}/${id}`)
    .then((response) => {
      dispatch({type: TEST_ITEM_FETCH_FULLFILLED, payload: response.data})
      return response.data
    })
    .catch((err) => {
      dispatch({type: TEST_ITEM_FETCH_REJECTED, payload: err})
    })
  }
}
