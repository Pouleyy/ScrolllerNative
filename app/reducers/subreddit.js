import { GET_SUBREDDIT } from '../actions/subreddit';

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBREDDIT:
      action.payload.list = action.payload.list.map(url => {
        return { url: url, isFavorite: true };
      });
      return {
        ...state,
        data: [...state.data, ...action.payload.list]
      };
    default:
      return state;
  }
};
