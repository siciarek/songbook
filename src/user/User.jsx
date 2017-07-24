import Login from './Login'
import Logout from './Logout'
import Dashboard from './Dashboard'
import Profile from './Profile'

export {Login, Logout, Dashboard, Profile}

export const
  USER_DEFAULT_STATE = {
    error: '',
    message: '',
    authenticated: false,
    id: null,
    dateOfBirth: null,
    gender: null,
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    level: 0,
    description: null,
    info: null,
    profileVisibleToThePublic: false,
  },
  USER_PROFILE_FETCH = 'USER_PROFILE_FETCH',
  USER_PROFILE_FETCH_FULFILLED = 'USER_PROFILE_FETCH_FULFILLED',
  USER_PROFILE_FETCH_REJECTED = 'USER_PROFILE_FETCH_REJECTED',
  USER_DASHBOARD_FETCH = 'USER_DASHBOARD_FETCH',
  USER_DASHBOARD_FETCH_FULFILLED = 'USER_DASHBOARD_FETCH_FULFILLED',
  USER_DASHBOARD_FETCH_REJECTED = 'USER_DASHBOARD_FETCH_REJECTED',
  USER_UPDATE = 'USER_UPDATE',
  USER_SAVE = 'USER_SAVE',
  USER_SAVE_FULFILLED = 'USER_SAVE_FULFILLED',
  USER_SAVE_REJECTED = 'USER_SAVE_REJECTED',
  USER_AUTH = 'USER_AUTH',
  USER_AUTH_FULFILLED = 'USER_AUTH_FULFILLED',
  USER_AUTH_REJECTED = 'USER_AUTH_REJECTED',
  USER_UNAUTH = 'USER_UNAUTH',
  USER_UNAUTH_FULFILLED = 'USER_UNAUTH_FULFILLED',
  USER_UNAUTH_REJECTED = 'USER_UNAUTH_REJECTED',
  USER_AUTH_CHECK = 'USER_AUTH_CHECK',
  USER_AUTH_CHECK_SUCCESS = 'USER_AUTH_CHECK_SUCCESS',
  USER_AUTH_CHECK_FAILURE = 'USER_AUTH_CHECK_FAILURE'