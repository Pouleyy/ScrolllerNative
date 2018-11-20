/* eslint-disable no-undef */
/* eslint-disable no-console */
// import axios from 'axios';

export const GET_SUBREDDIT = 'GET_SUBREDDIT';

export const getImageSubreddit = image => ({
  type: GET_SUBREDDIT,
  payload: image
});

// export const getSubreddit = subreddit => dispatch => {

// };

export async function getSubReddit() {
  const generatedUrl = 'https://scrolller.com/api/random/cattaps';
  try {
    const response = await fetch(generatedUrl);
    const jsonReponse = await response.json();

    dispatch(
      getImageSubreddit({
        list: jsonReponse.data
      })
    );
  } catch (error) {
    console.log('error', error);

    // a faire dans la vue si on appel un service
    // this.setState({
    //   error,
    //   isLoading: false
    // });
  }
}