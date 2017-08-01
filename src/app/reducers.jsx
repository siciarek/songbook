import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {routerReducer as routing} from 'react-router-redux'

import app from '../app/appReducer'
import lyrics from '../lyrics/lyricsReducer'
import author from '../author/authorReducer'
import artist from '../artist/artistReducer'
import audio from '../audio/audioReducer'
import video from '../video/videoReducer'
import song from '../song/songReducer'
import user from '../user/userReducer'
import test from '../test/testReducer'
import genre from '../genre/genreReducer'
import record from '../record/recordReducer'

export default combineReducers({
  form: formReducer,
  routing,
  app,
  user,
  genre,
  artist,
  author,
  lyrics,
  audio,
  video,
  song,
  record,
  test,
})