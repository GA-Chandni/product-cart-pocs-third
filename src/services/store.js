// createStore is Globalized satte
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

// Custom rootReducer
import rootreducers from "./reducer/rootReducer";

let store;

// Enable redux dev tool only in development mode
if (process.env.NODE_ENV !== "production") {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(rootreducers, composeEnhancers(applyMiddleware(thunk)));
} else {
  store = createStore(rootreducers, applyMiddleware(thunk));
}

export default store;
