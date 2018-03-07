import * as types from '../actions/constants';

const initialState = {
  state: 'loading',
  userId: null,
  userAvatarUrl: null,
};

export default function github(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_GITHUB_PROFILE_REQUEST:
      return Object.assign({}, state, {
        state: 'loading',
        userId: action.userId,
      });
    case types.FETCH_GITHUB_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        state: 'success',
        userId: action.userId,
        userAvatarUrl: action.userAvatarUrl,
      });
    case types.FETCH_GITHUB_PROFILE_FAILURE:
      return Object.assign({}, state, {
        state: 'failure',
        userId: action.userId,
      });
    default:
      return state;
  }
}
