import * as actionTypes from './actionTypes'
import { createReducer } from '@reduxjs/toolkit'

const initialState: any = {
  appointments: {},
  loadedAppointments: null,
  loadingAppointments: null,
  errorAppointments: null,
}

function requestAppointments(state: any) {
  state.loadedAppointments = false
  state.loadingAppointments = true
  state.errorAppointments = null
}

function requestAppointmentsError(state: any, action: any ) {
    state.loadedAppointments = true
    state.loadingAppointments = false
    state.errorAppointments = action.error
}

const getAllAppointmentsReducer = createReducer(initialState, {
    [actionTypes.GET_ALL_APPOINTMENTS]: requestAppointments,
    [actionTypes.GET_ALL_APPOINTMENTS_FAIL]: requestAppointmentsError,
    [actionTypes.GET_ALL_APPOINTMENTS_SUCCESS]: (state: any, action: any) => {

        state.appointments = action?.res?.data
        state.loadedAppointments= true
        state.loadingAppointments = false
        state.errorAppointments = false
    }
})

const postAppointmentReducer = createReducer(initialState, {
  [actionTypes.POST_APPOINTMENT]: requestAppointments,
  [actionTypes.POST_APPOINTMENT_FAIL]: requestAppointmentsError,
  [actionTypes.POST_APPOINTMENT_SUCCESS]: (state: any, action: any) => {

      state.appointments = [...state.appointments, action?.res?.data]
      state.loadedAppointments= true
      state.loadingAppointments = false
      state.errorAppointments = false
  }
})

export default function reducer(state = initialState, action: any) {
    return {
      getAllAppointmentsService: getAllAppointmentsReducer(state.getAllAppointmentService, action),
      postAppointment: postAppointmentReducer(state, action)
    }
}