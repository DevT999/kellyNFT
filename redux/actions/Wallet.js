
import {
    WALLET_CONNECTED
} from '../action-types'


const setConnected = (connected) => {
    return (dispatch) => {
        dispatch({
            type: WALLET_CONNECTED,
            connected: connected
        })
    }
}

export {
    setConnected
}