import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import * as actions from '../actions';

class Feed extends React.Component {
  static propTypes = {
    staticContext: PropTypes.object,
    userId: PropTypes.string,
    userAvatarUrl: PropTypes.string,
    state: PropTypes.string.isRequired,
    onLoad: PropTypes.func.isRequired,
  };

  static defaultProps = {
    staticContext: null,
    userId: null,
    userAvatarUrl: null,
  };

  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.isFinished = this.props.onLoad();
    }
  }

  componentDidMount() {
    if (this.props.state !== 'success') {
      this.props.onLoad();
    }
  }

  render() {
    const { state, userId, userAvatarUrl } = this.props;
    return (
      <div>
        <h4>hello, feed</h4>
        {state == 'success' ?
          <div className="feed">
            <span className="feed__avatar">
              <img src={userAvatarUrl} width="64" height="64" />
            </span>
            <code>@{userId}</code>
          </div> :
          <div>
            <code>@{userId}</code> - {state}
          </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.github.state,
    userId: state.github.userId,
    userAvatarUrl: state.github.userAvatarUrl,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(actions.fetchGitHubProfile('lttxzmj')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
