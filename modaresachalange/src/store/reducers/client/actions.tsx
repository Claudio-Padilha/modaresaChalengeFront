import axios from 'axios'
import * as actionTypes from './actionTypes'

const getAllClientsRequest = () => {

  return (dispatch: any) => {
    dispatch({
      type: actionTypes.GET_ALL_CLIENTS,
    })

    axios.get('http://localhost:8000/api/clients/', {})
      .then((res: any) => {
        if (res) {
          dispatch({
            type: actionTypes.GET_ALL_CLIENTS_SUCCESS,
            res
          })
        }
      })
      .catch((error: any) => {
        if (error) {
          dispatch({
            type: actionTypes.GET_ALL_CLIENTS_FAIL,
            error
          })
        }
      })
  }
}

export { getAllClientsRequest }