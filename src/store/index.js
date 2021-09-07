import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import editor from './editor';

const store = configureStore({
  reducer: { editor }, // a map of reducer, 之後在 useSelector 取用時需改為 state.{reducer name}
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger), // apply middleware
});

export default store;
