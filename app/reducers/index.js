import { combineReducers } from 'redux';

import subreddit from './subreddit';
import favorite from './favorite';

export default combineReducers({
  subreddit,
  favorite
});
