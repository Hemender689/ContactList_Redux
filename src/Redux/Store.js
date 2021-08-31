import { createStore ,combineReducers} from "redux";
import {persistReducer,persistStore} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import rootReducer from './Reducer';

const persistConfig = {
    key : 'root',
    storage
}

const Allreducers = combineReducers({
    rootReducer,
  });

const persistedReducer = persistReducer(persistConfig,Allreducers)
const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  

 export  const persistor = persistStore(store);

export default  store;