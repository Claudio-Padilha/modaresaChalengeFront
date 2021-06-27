import { useMemo, useCallback } from 'react'
import { actions as appointmentActions, selectors as appointmentSelectors } from '../store/reducers/appointment/index'

import { useDispatch, useSelector } from 'react-redux' 
import { bindActionCreators } from 'redux'

export const useAppointmentActions = () => {
    const dispatch = useDispatch()

    const actions = useMemo(
    () => bindActionCreators({
        getAll: appointmentActions.getAllAppointmentsRequest
    }, dispatch)
    , [dispatch])

    const getAllAppointments = useCallback(
        () => {
            actions.getAll()
        },
        []
    )

    return { getAllAppointments }
}

export const useAppointment = () => {

    const allAppointmentsLoading = useSelector((state: any) => appointmentSelectors.getAllAppointmentsLoading(state))
    const allAppointmentsLoaded = useSelector((state: any) => appointmentSelectors.getAllAppointmentsLoaded(state))
    const allAppointmentsError = useSelector((state: any) => appointmentSelectors.getAllAppointmentsError(state))
    const allAppointments = useSelector((state: any) => appointmentSelectors.getAllAppointments(state))
    const state = useSelector((state: any) => state)

    return {
      allAppointmentsLoading,
      allAppointmentsLoaded,
      allAppointmentsError,
      allAppointments,
      state
    }
}  