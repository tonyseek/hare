import fetch from 'isomorphic-fetch';
import * as config from '../config';
import * as types from './constants';

export function fetchGitHubProfile(userId) {
  return (dispatch) => {
    dispatch({ type: types.FETCH_GITHUB_PROFILE_REQUEST, userId });

    fetch(`${config.API_URL}/users/${userId}`).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          const userAvatarUrl = data.avatar_url;
          dispatch({
            type: types.FETCH_GITHUB_PROFILE_SUCCESS,
            userId,
            userAvatarUrl,
          });
        }).catch(() => {
          dispatch({ type: types.FETCH_GITHUB_PROFILE_FAILURE, userId });
        });
      } else {
        dispatch({ type: types.FETCH_GITHUB_PROFILE_FAILURE, userId });
      }
    }).catch(() => {
      dispatch({ type: types.FETCH_GITHUB_PROFILE_FAILURE, userId });
    });
  };
}
