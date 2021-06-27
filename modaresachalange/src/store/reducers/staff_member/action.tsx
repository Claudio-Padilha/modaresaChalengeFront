import axios from 'axios'
import * as actionTypes from './actionTypes'

const getAllStaffMembersRequest = () => {

  return (dispatch: any) => {
    dispatch({
      type: actionTypes.GET_ALL_STAFFMEMBERS,
    })

    axios.get('http://localhost:8000/api/staffMembers/', {})
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

export { getAllStaffMembersRequest }