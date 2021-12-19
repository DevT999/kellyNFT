

import {
    WALLET_CONNECTED,
    SET_KEY,
    GET_KEY
} from '../action-types'

const initialState = {
    connected: false,
    key: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case WALLET_CONNECTED:
            return {
                ...state,
                connected: action.connected,
            }
        case SET_KEY:
            return {
                ...state,
                key: action.key,
            }
        case GET_KEY:
            return {
                ...state,
                key: action.key,
            }
        default:
            return state
    }
}
