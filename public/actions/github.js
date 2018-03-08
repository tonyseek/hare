import fetch from 'isomorphic-fetch';
import { API_URL } from '../config';
import { makeUrl } from '../utility';
import * as types from './constants';


export function fetchGitHubProfile(userId) {
  const profileUrl = makeUrl(API_URL, `users/${userId}`);

  return (dispatch) => {
    dispatch({ type: types.FETCH_GITHUB_PROFILE_REQUEST, userId });

    return fetch(profileUrl).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          const userAvatarUrl = data.avatar_url;
          dispatch({
            type: types.FETCH_GITHUB_PROFILE_SUCCESS,
            userId,
            userAvatarUrl,
          });
        }).catch(() => {
          dispatch({ type: types.FETCH_GITHUB_PROFILE_FAILURE, userId });
          return Promise.reject();
        });
      } else {
        dispatch({ type: types.FETCH_GITHUB_PROFILE_FAILURE, userId });
        return Promise.reject();
      }
    }).catch(() => {
      dispatch({ type: types.FETCH_GITHUB_PROFILE_FAILURE, userId });
      return Promise.reject();
    });
  };
}
