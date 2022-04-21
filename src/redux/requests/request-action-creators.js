import {REQUEST_ACTION_TYPES} from "./request-action-types";
import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";

const acceptRequestRequest = () => {
    return {
        type: REQUEST_ACTION_TYPES.ACCEPT_REQUEST_REQUEST
    }
}

const acceptRequestSuccess = (data, token, message) => {
    return {
        type: REQUEST_ACTION_TYPES.ACCEPT_REQUEST_SUCCESS,
        payload: {data, token, message}
    }
}

const acceptRequestFail = message => {
    return {
        type: REQUEST_ACTION_TYPES.ACCEPT_REQUEST_FAIL,
        payload: message
    }
}

const acceptRequest = (user, navigate) => {
    return async dispatch => {
        try {
            dispatch(acceptRequestRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/login`,
                data: user
            });
            const {data, token, message} = response.data;
            dispatch(acceptRequestSuccess(data, token, message));
            navigate('/');
            localStorage.setItem(CONSTANTS.WINDY_CRAFT_ADMIN_TOKEN_KEY, token);
            localStorage.setItem(CONSTANTS.WINDY_CRAFT_ADMIN_AUTH_KEY, JSON.stringify(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(acceptRequestFail(message));
        }
    }
}

const nextPage = () => {
    return {
        type: REQUEST_ACTION_TYPES.NEXT_PAGE
    }
}

const previousPage = () => {
    return {
        type: REQUEST_ACTION_TYPES.PREVIOUS_PAGE
    }
}

const goToPage = page => {
    return {
        type: REQUEST_ACTION_TYPES.GO_TO_PAGE,
        payload: page
    }
}

const savePayment = payment => {
    return {
        type: REQUEST_ACTION_TYPES.SAVE_PAYMENT,
        payload: payment
    }
}

const saveBankAccountInfo = bankAccount => {
    return {
        type: REQUEST_ACTION_TYPES.SAVE_BANK_ACCOUNT_INFORMATION,
        payload: bankAccount
    }
}

const savePersonalInfo = personalInfo => {
    return {
        type: REQUEST_ACTION_TYPES.SAVE_PERSONAL_INFORMATION,
        payload: personalInfo
    }
}

const saveAccountInfo = accountInfo => {
    return {
        type: REQUEST_ACTION_TYPES.SAVE_ACCOUNT_INFORMATION,
        payload: accountInfo
    }
}

export const REQUEST_ACTION_CREATORS = {
    saveAccountInfo,
    savePersonalInfo,
    saveBankAccountInfo,
    savePayment,
    nextPage,
    previousPage,
    goToPage,
    acceptRequest,
};
