import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import PictureReduser from './PictureReduser';

export default combineReducers({
  router: routerReducer,
  pictures: PictureReduser,
})
