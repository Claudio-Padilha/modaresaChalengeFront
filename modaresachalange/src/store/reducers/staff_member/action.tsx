import axios from 'axios'
import * as actionTypes from './actionTypes'

const getAllStaffMemberssRequest = () => {

  return (dispatch: any) => {
    dispatch({
      type: actionTypes.GET_ALL_STAFFMEMBERS,
    })

    axios.get('http://localhost:8000/satffMembers/', {})
      .then((res: any) => {
        if (res) {
          dispatch({
            type: actionTypes.GET_ALL_STAFFMEMBERS_SUCCESS,
            res
          })
        }
      })
      .catch((error: any) => {
        if (error) {
          dispatch({
            type: actionTypes.GET_ALL_STAFFMEMBERS_FAIL,
            error
          })
        }
      })
  }
}

export { getAllStaffMemberssRequest }