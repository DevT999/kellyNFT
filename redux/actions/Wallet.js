
import {
    WALLET_CONNECTED,
    SET_KEY,
    GET_KEY
} from '../action-types'


export const setConnected = (connected) => {
    return (dispatch) => {
        dispatch({
            type: WALLET_CONNECTED,
            connected: connected
        })
    }
}

export const setKey = (key) => {
    return (dispatch) => {
        dispatch({
            type: SET_KEY,
            key: key
        })
    }
}

export const getKey = () => {
    return (dispatch) => {
        dispatch({
            type: GET_KEY
        })
    }
}