import * as actionTypes from './actionTypes'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  appointments: {},
  loadedAppointments: null,
  loadingAppointments: null,
  errorAppointments: null,
}

function requestGetAllAppointments(state: any) {
  state.loadedAppointments = false
  state.loadingAppointments = true
  state.errorAppointments = null
}

function requestGetAllAppointmentsError(state: any, action: any ) {
    state.loadedAppointments = true
    state.loadingAppointments = false
    state.errorAppointments = action.error
}

const getAllAppointmentsReducer = createReducer(initialState, {
    [actionTypes.GET_ALL_APPOINTMENTS]: requestGetAllAppointments,
    [actionTypes.GET_ALL_APPOINTMENTS_FAIL]: requestGetAllAppointmentsError,
    [actionTypes.GET_ALL_APPOINTMENTS_SUCCESS]: (state: any, action: any) => {

        console.log(action?.res?.data, "DATAAAAAAAAAA")
        state.appointments = action?.res?.data
        state.loadedAppointments= true
        state.loadingAppointments = false
        state.errorAppointments = false
    }
})

export default function reducer(state = initialState, action: any) {
    return getAllAppointmentsReducer(state, action)
}