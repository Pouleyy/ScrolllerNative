//OPTIONAL FOR NOW, MIGHT BE USELESS
import { ADD_FAVORITE } from '../actions/favorite';

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        data: [...state.data, ...action.data]
      };
    default:
      return state;
  }
};
