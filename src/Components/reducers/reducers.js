import { CHANGE_PoliceStationID, CHANGE_PASSWORD, CHANGE_ROUTE, SIGNOUT, SIGNIN, CHANGE_AUTH_STATE} from '../constants/constants';

if(sessionStorage.route !== SIGNIN)
	sessionStorage.setItem('route', SIGNOUT)

const initialState = {
	PoliceStationID: undefined,
	password: undefined,
	route: sessionStorage.route,
	auth: false,
}

export const rootReducer = (state=initialState, action={}) => {
	switch(action.type){
		case CHANGE_PoliceStationID:
			return {...state, name: action.payload};

		case CHANGE_PASSWORD:
            return {...state, password: action.payload};
            
		case CHANGE_ROUTE:
			sessionStorage.route = action.payload;
			return {...state, route: action.payload};

		case CHANGE_AUTH_STATE:
			return { ...state, auth: action.payload };

		default:
			return state;
	}
}