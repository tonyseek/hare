import React from 'react';
import fetch from 'isomorphic-fetch';

export default class Feed extends React.Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
    }
  }
  render() {
    return <div>hello, my feed</div>;
  }
}
