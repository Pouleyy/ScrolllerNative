/* eslint-disable no-case-declarations */
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/subreddit';

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      action.data.isFavorite = true;
      return {
        ...state,
        data: [...state.data, action.data]
      };
    case REMOVE_FAVORITE:
      const stateCopy = [...state.data];
      const cleanState = stateCopy.filter(media => media.id != action.data.id);
      return {
        ...state,
        data: [...cleanState]
      };
    default:
      return state;
  }
};
