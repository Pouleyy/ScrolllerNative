/* eslint-disable no-undef */
/* eslint-disable no-console */
import axios from 'axios';

export const GET_SUBREDDIT = 'GET_SUBREDDIT';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const getImageSubreddit = image => ({
  type: GET_SUBREDDIT,
  payload: image
});

export const getSubreddit = (subreddit, refresh) => dispatch => {
  const generatedUrl = `https://scrolller.com/api/random/${subreddit}`;
  axios({
    method: 'GET',
    url: generatedUrl
  })
    .then(res => {
      dispatch(
        getImageSubreddit({
          list: res.data,
          refresh: refresh
        })
      );
    })
    .catch(err => console.log(err));
};

export const addFavorite = data => ({
  type: ADD_FAVORITE,
  data
});

export const removeFavorite = data => ({
  type: REMOVE_FAVORITE,
  data
});
