import {GET_DASHBOARD_TYPES} from "./dashboard-action-types";
import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";

const getDashboardRequest = () => {
    return {
        type: GET_DASHBOARD_TYPES.GET_DASHBOARD_REQUEST
    }
}

const getDashboardSuccess = (data) => {
    return {
        type: GET_DASHBOARD_TYPES.GET_DASHBOARD_SUCCESS,
        payload: data
    }
}

const getDashboardFail = message => {
    return {
        type: GET_DASHBOARD_TYPES.GET_DASHBOARD_FAIL,
        payload: message
    }
}

const getDashboard = (token) => {
    return async dispatch => {
        try {
            dispatch(getDashboardRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/dashboard`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getDashboardSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getDashboardFail(message));
        }
    }
}

export const DASHBOARD_ACTION_CREATORS = {getDashboard};
