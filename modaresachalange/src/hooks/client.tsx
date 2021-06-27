import { useMemo, useCallback } from 'react'
import { actions as clientActions, selectors as clientSelectors } from '../store/reducers/client/index'

import { useDispatch, useSelector } from 'react-redux' 
import { bindActionCreators } from 'redux'

export const useClientActions = () => {
    const dispatch = useDispatch()

    const actions = useMemo(
    () => bindActionCreators({
        getAll: clientActions.getAllClientsRequest
    }, dispatch)
    , [dispatch])

    const getAllClients = useCallback(
        () => {
            actions.getAll()
        },
        []
    )

    return { getAllClients }
}

export const useClient = () => {

    const allClientsLoading = useSelector((state: any) => clientSelectors.getAllClientsLoading(state))
    const allClientsLoaded = useSelector((state: any) => clientSelectors.getAllClientsLoaded(state))
    const allClientsError = useSelector((state: any) => clientSelectors.getAllClientsError(state))
    const allClients = useSelector((state: any) => clientSelectors.getAllClients(state))
    const state = useSelector((state: any) => state)

    return {
      allClientsLoading,
      allClientsLoaded,
      allClientsError,
      allClients,
      state
    }
}  