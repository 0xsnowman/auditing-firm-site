import { createStore, applyMiddleware } from 'redux'

import rootReducer from "./reducers";
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import sagas from "./sagas";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['Sidemenu']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware({});
  
    const store = createStore(
        persistedReducer,
        applyMiddleware(sagaMiddleware),
    );

    console.log("Store -", store.getState());
  
    // Extensions
    store.runSaga = sagaMiddleware.run(sagas);
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry
  
    let persistor = persistStore(store);
  
    return { store, persistor }
  }