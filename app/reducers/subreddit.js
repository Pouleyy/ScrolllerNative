import uuidv4 from 'uuid/v4';
import { GET_SUBREDDIT } from '../actions/subreddit';

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBREDDIT:
      action.payload.list = action.payload.list.map(url => {
        return { id: uuidv4(), url: url, isFavorite: false };
      });
      return {
        ...state,
        data: [...state.data, ...action.payload.list]
      };
    default:
      return state;
  }
};
