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

export { getAllAppointmentsRequest }