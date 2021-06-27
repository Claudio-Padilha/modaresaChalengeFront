import * as actionTypes from './actionTypes'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  staff_members: {},
  loadedStaffMembers: null,
  loadingStaffMembers: null,
  errorStaffMembers: null,
}

function requestGetAllStaffMembers(state: any) {
  state.loadedStaffMembers = false
  state.loadingStaffMembers = true
  state.errorStaffMembers = null
}

function requestGetAllStaffMembersError(state: any, action: any ) {
    state.loadedStaffMembers = true
    state.loadingStaffMembers = false
    state.errorStaffMembers = action.error
}

const getAllStaffMembersReducer = createReducer(initialState, {
    [actionTypes.GET_ALL_STAFFMEMBERS]: requestGetAllStaffMembers,
    [actionTypes.GET_ALL_STAFFMEMBERS_FAIL]: requestGetAllStaffMembersError,
    [actionTypes.GET_ALL_STAFFMEMBERS_SUCCESS]: (state: any, action: any) => {

      console.log(action?.res?.data, "DATAAAAAAAAAA")
        state.staff_members = action?.res?.data
        state.loadedStaffMembers= true
        state.loadingStaffMembers = false
        state.errorStaffMembers = false
    }
})

export default function reducer(state = initialState, action: any) {
    return getAllStaffMembersReducer(state, action)
}