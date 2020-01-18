import { CHANGE_PoliceStationID, CHANGE_PASSWORD, CHANGE_ROUTE, CHANGE_AUTH_STATE} from '../constants/constants';

export const changeStationID = (text) => {
	return {
		type: CHANGE_PoliceStationID,
		payload: text
	}
}

export const changePassword = (text) => {
	return {
		type: CHANGE_PASSWORD,
		payload: text
	}
}

export const changeRoute = (route) => {
	return {
		type: CHANGE_ROUTE,
		payload: route
	}
}

export const changeAuthState = payload => ({
	type: CHANGE_AUTH_STATE,
	payload,
})