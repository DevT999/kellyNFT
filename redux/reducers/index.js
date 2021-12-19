import { combineReducers } from "redux"
import {
	walletReducer
} from './Wallet'

export default combineReducers({
	wallet: walletReducer,
})