import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
//import { ProductsReducer } from '../products/reducers';
import { UsersReducer } from '../users/reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      //producs: ProductsReducer,
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}
