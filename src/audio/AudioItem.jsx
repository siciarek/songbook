import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchAudioItems} from './AudioActions'
import AudioItem from './components/AudioItem'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.audio.current,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: () => fetchAudioItems(ownProps.params.id)
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioItem)
