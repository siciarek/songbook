import React from 'react'
import {connect} from 'react-redux'

import {fetchTweets, updateTweet} from '../actions/tweetsActions'
import Header from "./Header";

class Tweets extends React.Component {

  fetch() {
    this.props.dispatch(fetchTweets())
  }

  update(id, text) {
    let val = prompt("Please enter new value", text);

    if (val !== null && val !== text) {
      this.props.dispatch(updateTweet(id, val))
    }
  }

  render() {
    const items = this.props.tweets;
    const style = {
      cursor: 'pointer',
    }

    let mappedItems = (
      <button className={'btn-success btn-lg btn'} onClick={this.fetch.bind(this)}>load tweets</button>
    )

    if (items.length > 0) {
      const temp = items.map((item) => {
          return <li key={item.id} onClick={this.update.bind(this, item.id, item.title)} style={style}>
            {item.title}
          </li>
        }
      )

      mappedItems = (
        <ul>
          {temp}
        </ul>
      )
    }

    return (
      <div>
        <Header title="Tweets"/>
        {mappedItems}
      </div>
    )
  }
}

export default connect((store) => {
  return {
    tweets: store.tweets.tweets,
  }
})(Tweets);