import { CHANGE_THEME } from '../actions/themes';
import { themeBlue } from '../config/themes';

const initialState = {
  currentTheme: themeBlue
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.theme
      };

    default:
      return { ...state, currentTheme: themeBlue };
  }
};
