import React from 'react'
import {connect} from 'react-redux'

import AppHeader from '../app/AppHeader'
import {authCheck, updateUser, saveUser} from './UserActions'

import ProfileForm from './ProfileForm'

class Profile extends React.Component {

  constructor(params) {
    super(params)
    this.props.dispatch(authCheck())
  }

  removeEntity = (id) => {
    console.log(id)
    // this.props.dispatch(removeUser(id))
  }

  updateEntity = (key, value) => {
    let state = {...this.props.current}
    state[key] = value
    this.props.dispatch(updateUser(state))
  }

  saveEntity = () => {
    let state = {...this.props.current}
    this.props.dispatch(saveUser(state))
  }

  render() {

    if (this.props.authenticated === false) {
      return (
        <div className="container">
        </div>
      )
    }

    return (
      <div className="container">
        <AppHeader title="User profile"/>
        <ProfileForm current={this.props.current} update={this.updateEntity} save={this.saveEntity} remove={this.removeEntity}/>
      </div>
    );
  }
}

export default connect((store) => {
  window.store = store
  return {
    current: store.user,
  }
})(Profile)