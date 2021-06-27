import * as actionTypes from './actionTypes'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  clients: {},
  loadedClients: null,
  loadingClients: null,
  errorClients: null,
}

function requestGetAllClients(state: any) {
  state.loadedClients = false
  state.loadingClients = true
  state.errorClients = null
}

function requestGetAllClientsError(state: any, action: any ) {
    state.loadedClients = true
    state.loadingClients = false
    state.errorClients = action.error
}

const getAllClientsReducer = createReducer(initialState, {
    [actionTypes.GET_ALL_CLIENTS]: requestGetAllClients,
    [actionTypes.GET_ALL_CLIENTS_FAIL]: requestGetAllClientsError,
    [actionTypes.GET_ALL_CLIENTS_SUCCESS]: (state: any, action: any) => {

        state.clients = action?.res?.data?.data
        state.loadedClients= true
        state.loadingClients = false
        state.errorClients = false
    }
})

export default function reducer(state = initialState, action: any) {
    return getAllClientsReducer(state, action)
}