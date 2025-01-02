// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { Reducer } from "./Reducer";
// import {thunk} from "redux-thunk";
// import logger from 'redux-logger'


// const rootReducer=combineReducers({user:Reducer});


// const Store = configureStore({ reducer: rootReducer, middleware: [thunk, logger] })



// export default Store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { thunk } from "redux-thunk"; // Correct named import for redux-thunk
import logger from 'redux-logger'

const rootReducer = combineReducers({ user: Reducer });

// const Store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
// });

const Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk, ...(process.env.NODE_ENV !== "production" ? [logger] : [])),
  });
  

export default Store;



