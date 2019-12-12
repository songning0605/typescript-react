import { combineReducers } from 'redux'
import locationReducer from './location'

export const makeRootReducer = (asyncReducers:object) => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers
  })
}

// 公共注册reducer方法
export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer