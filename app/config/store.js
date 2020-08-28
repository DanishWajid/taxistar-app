import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';

import rootSaga from '../saga';
import reducer from '../reducers'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

const persistConfig = {

    key:'root',
    storage:AsyncStorage
}

const pReducer = persistReducer(persistConfig, reducer);


export const store =  createStore(pReducer,applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)

