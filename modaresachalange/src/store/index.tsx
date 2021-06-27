import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import getAllStaffMembersReducer from './reducers/staff_member/reducer'
import getAllAppointmentsReducer from './reducers/appointment/reducer'
import getAllClientsReducer from './reducers/client/reducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const configureStore = () => {
    const reducers = combineReducers({
      getAllStaffMembersService: getAllStaffMembersReducer,
      getAllAppointmentsService: getAllAppointmentsReducer,
      getAllClientsService: getAllClientsReducer
    })
  
    const middleware = [thunk]
  
    const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
    const store = createStore(
      reducers,
      enhancers(applyMiddleware(...middleware))
    )
  
    return store
  }