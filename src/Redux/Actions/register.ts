import Api from "../Api/Api";
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from "./Types";

export const register = (body: any) => async (dispatch: any) => {
	try {
		dispatch({
			type: REGISTER_START,
		});
		const res = await Api.post("/auth/register", body);
		if (res) {
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data?.message,
			});
		}
	} catch (err: any) {
		dispatch({
			type: REGISTER_FAIL,
			payload: err.response?.data.message,
		});
	}
};
