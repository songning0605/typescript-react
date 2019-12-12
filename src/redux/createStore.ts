import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createHashHistory } from 'history'
import makeRootReducer from './reducers'
import { updateLocation } from './location'

const localHistory = createHashHistory();

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers:Array<any> = []
//   if (__DEV__) {
//     const devToolsExtension = window.devToolsExtension
//     if (typeof devToolsExtension === 'function') {
//       enhancers.push(devToolsExtension())
//     }
//   }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer({}),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = localHistory.listen(updateLocation(store))

//   if (module.hot) {
//     module.hot.accept('./reducers', () => {
//       const reducers = require('./reducers').default
//       store.replaceReducer(reducers(store.asyncReducers))
//     })
//   }

  return store
}