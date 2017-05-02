import React from 'react'
import PropTypes from 'prop-types'
import './AppHeader.css'

export default class AppHeader extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: 'Page',
  }

  render() {

    const title = this.props.title

    return (
      <div>
        <h2 className="page-header">
          {title}
        </h2>
      </div>
    )
  }
}