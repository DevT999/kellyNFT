

import {
    WALLET_CONNECTED,
} from '../action-types'

const initialState = {
    connected: false,
}

const walletReducer = (state = initialState, action) => {
    switch (action.type) {
        case WALLET_CONNECTED:
            return {
                ...state,
                connected: action.connected,
            }
        default:
            return state
    }
}

export {
    walletReducer
}