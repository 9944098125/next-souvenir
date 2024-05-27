import register from "./register";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
	register,
});

export interface RootState {
	register: {
		loading: boolean;
		message: string;
		success: boolean;
	};
}
