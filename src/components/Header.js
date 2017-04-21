import React from 'react'

export default class Header extends React.Component {

  render() {

    const {title} = this.props;

    return (
      <div>
        <h2 className={'page-header'}>{title}</h2>
      </div>
    )
  }
}
