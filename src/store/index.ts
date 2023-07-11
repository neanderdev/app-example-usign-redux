import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import { ICartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const persistConfig = {
  key: "cart",
  storage,
};

const persistreducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistreducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { persistor, store };
