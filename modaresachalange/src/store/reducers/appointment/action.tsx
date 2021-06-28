import axios from 'axios'
import * as actionTypes from './actionTypes'

const getAllAppointmentsRequest = () => {

  return (dispatch: any) => {
    dispatch({
      type: actionTypes.GET_ALL_APPOINTMENTS,
    })

    axios.get('http://localhost:8000/api/appointments/', {})
      .then((res: any) => {
        if (res) {
          dispatch({
            type: actionTypes.GET_ALL_APPOINTMENTS_SUCCESS,
            res
          })
        }
      })
      .catch((error: any) => {
        if (error) {
          dispatch({
            type: actionTypes.GET_ALL_APPOINTMENTS_FAIL,
            error
          })
        }
      })
  }
}

const postAppointmentRequest = (data: any) => {

  console.log(data)

  return (dispatch: any) => {
    dispatch({
      type: actionTypes.POST_APPOINTMENT,
      payload: data
    })

    axios.post('http://localhost:8000/api/appointments/',data, {} )
      .then((res: any) => {
        if (res) {
          dispatch({
            type: actionTypes.POST_APPOINTMENT_SUCCESS,
            res
          })
        }
      })
      .catch((error: any) => {
        if (error) {
          dispatch({
            type: actionTypes.POST_APPOINTMENT_FAIL,
            error
          })
        }
      })
  }
}

export { getAllAppointmentsRequest, postAppointmentRequest }