import {GET_DASHBOARD_TYPES} from "./dashboard-action-types";

const INITIAL_STATE = {
    dashboard: null,
    dashboardLoading: false,
    dashboardError: false,
}
const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DASHBOARD_TYPES.GET_DASHBOARD_REQUEST:
            return {
                ...state,
                dashboardLoading: true,
                dashboardError: null
            }

        case GET_DASHBOARD_TYPES.GET_DASHBOARD_SUCCESS:
            return {
                ...state,
                dashboardLoading: false,
                dashboardError: null,
                dashboard: action.payload
            }


        case GET_DASHBOARD_TYPES.GET_DASHBOARD_FAIL:
            return {
                ...state,
                dashboardLoading: false,
                dashboardError: action.payload
            }
        default:
            return state;
    }
}

export const selectDashboard = state => state.dashboard;

export default dashboardReducer;
