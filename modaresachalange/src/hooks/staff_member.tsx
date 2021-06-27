import { useMemo, useCallback } from 'react'
import { actions as staffMemberActions, selectors as staffMemberSelectors } from '../store/reducers/staff_member/index'

import { useDispatch, useSelector } from 'react-redux' 
import { bindActionCreators } from 'redux'

export const useStaffMemberActions = () => {
    const dispatch = useDispatch()

    const actions = useMemo(
    () => bindActionCreators({
        getAll: staffMemberActions.getAllStaffMembersRequest
    }, dispatch)
    , [dispatch])

    const getAllStaffMembers = useCallback(
        () => {
            actions.getAll()
        },
        []
    )

    return { getAllStaffMembers }
}

export const useStaffMember = () => {

    const allStaffMembersLoading = useSelector((state: any) => staffMemberSelectors.getAllStaffMembersLoading(state))
    const allStaffMembersLoaded = useSelector((state: any) => staffMemberSelectors.getAllStaffMembersLoaded(state))
    const allStaffMembersError = useSelector((state: any) => staffMemberSelectors.getAllStaffMembersError(state))
    const allStaffMembers = useSelector((state: any) => staffMemberSelectors.getAllStaffMembers(state))
    const state = useSelector((state: any) => state)

    return {
      allStaffMembersLoading,
      allStaffMembersLoaded,
      allStaffMembersError,
      allStaffMembers,
      state
    }
}  