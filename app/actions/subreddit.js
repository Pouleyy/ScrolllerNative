/* eslint-disable no-undef */
/* eslint-disable no-console */
import axios from 'axios';

export const GET_SUBREDDIT = 'GET_SUBREDDIT';

export const getImageSubreddit = image => ({
  type: GET_SUBREDDIT,
  payload: image
});

export const getSubreddit = subreddit => dispatch => {
  const generatedUrl = 'https://scrolller.com/api/random/winterporn';
  console.log('ttest', subreddit);
  axios({
    method: 'GET',
    url: generatedUrl
  })
    .then(res => {
      console.log('redux', res);
      dispatch(
        getImageSubreddit({
          list: res.data
        })
      );
    })
    .catch(err => console.log(err));
};
