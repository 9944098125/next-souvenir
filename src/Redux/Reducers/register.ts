import {
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from "../Actions/Types";

const initialState = {
	loading: false,
	message: "",
	success: false,
};
export default function register(state = initialState, action: any) {
	switch (action.type) {
		case REGISTER_START:
			return {
				...state,
				loading: true,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				message: action.payload,
			};
		case REGISTER_FAIL:
			return {
				...state,
				loading: false,
				success: false,
				message: action.payload,
			};
		default:
			return state;
	}
}
