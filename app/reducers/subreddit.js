/* eslint-disable no-case-declarations */
import uuidv4 from 'uuid/v4';
import {
  GET_SUBREDDIT,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/subreddit';

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBREDDIT:
      action.payload.list = action.payload.list.map(url => {
        return { id: uuidv4(), url: url, isFavorite: false };
      });
      return action.payload.refresh
        ? {
            ...state,
            data: [...action.payload.list]
          }
        : {
            ...state,
            data: [...state.data, ...action.payload.list]
          };
    case ADD_FAVORITE:
      const addCopy = [...state.data];
      addCopy.map(media => {
        if (media.id == action.data.id) media.isFavorite = true;
      });
      return {
        ...state,
        data: [...addCopy]
      };
    case REMOVE_FAVORITE:
      const removeCopy = [...state.data];
      removeCopy.map(media => {
        if (media.id == action.data.id) media.isFavorite = false;
      });
      return {
        ...state,
        data: [...removeCopy]
      };
    default:
      return state;
  }
};
