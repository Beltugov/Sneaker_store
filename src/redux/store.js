import {createStore, combineReducers} from "redux";
import authReducer from "./reducer/reducerLogin"
import basketReducer from "./reducer/reducerBasket"
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    authReducer,
    basketReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer)

export default store
export const persistor = persistStore(store)
