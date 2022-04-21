import axios from "axios";
import {CONSTANTS} from "../../constants/constants";
import {STATEMENT_ACTION_TYPES} from "./statement-action-types";

const getStatementRequest = () => {
    return {
        type: STATEMENT_ACTION_TYPES.GET_STATEMENT_REQUEST
    }
}

const getStatementSuccess = (data) => {
    return {
        type: STATEMENT_ACTION_TYPES.GET_STATEMENT_SUCCESS,
        payload: data
    }
}

const getStatementFailure = message => {
    return {
        type: STATEMENT_ACTION_TYPES.GET_STATEMENT_FAIL,
        payload: message
    }
}

const getStatement = (ID, token, query) => {
    return async dispatch => {
        try {
            dispatch(getStatementRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.SERVER_BASE_URL}/transactions?query=${query}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getStatementSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getStatementFailure(message));
        }
    }
}


export const STATEMENT_ACTION_CREATORS = {getStatement};
