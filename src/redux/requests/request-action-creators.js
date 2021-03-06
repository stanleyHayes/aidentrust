import {REQUEST_ACTION_TYPES} from "./request-action-types";
import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";

const acceptRequestRequest = () => {
    return {
        type: REQUEST_ACTION_TYPES.ACCEPT_REQUEST_REQUEST
    }
}

const acceptRequestSuccess = (message) => {
    return {
        type: REQUEST_ACTION_TYPES.ACCEPT_REQUEST_SUCCESS,
        payload: message
    }
}

const acceptRequestFail = message => {
    return {
        type: REQUEST_ACTION_TYPES.ACCEPT_REQUEST_FAIL,
        payload: message
    }
}

const acceptRequest = (request, ID) => {
    return async dispatch => {
        try {
            dispatch(acceptRequestRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/requests/${ID}/accept`,
                data: request
            });
            const {message} = response.data;
            dispatch(acceptRequestSuccess(message));
            goToPage(8);
        } catch (e) {
            const {message} = e.response.data;
            dispatch(acceptRequestFail(message));
        }
    }
}


const rejectRequestRequest = () => {
    return {
        type: REQUEST_ACTION_TYPES.REJECT_REQUEST_REQUEST
    }
}

const rejectRequestSuccess = (message) => {
    return {
        type: REQUEST_ACTION_TYPES.REJECT_REQUEST_SUCCESS,
        payload: message
    }
}

const rejectRequestFail = message => {
    return {
        type: REQUEST_ACTION_TYPES.REJECT_REQUEST_FAIL,
        payload: message
    }
}

const rejectRequest = (ID) => {
    return async dispatch => {
        try {
            dispatch(rejectRequestRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/requests/${ID}/reject`
            });
            const {message} = response.data;
            dispatch(rejectRequestSuccess(message));
            goToPage(9);
        } catch (e) {
            const {message} = e.response.data;
            dispatch(rejectRequestFail(message));
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

const saveAddressInfo = addressInfo => {
    return {
        type: REQUEST_ACTION_TYPES.SAVE_ADDRESS_INFORMATION,
        payload: addressInfo
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
    saveAddressInfo,
    rejectRequest
};
