import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {} // a map of reducer, 之後在 useSelector 取用時需改為 state.{reducer name}
});

export default store;
