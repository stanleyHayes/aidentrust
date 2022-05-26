import {AUTH_ACTION_TYPES} from "./auth-action-types";
import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";

const signInRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_REQUEST
    }
}

const signInSuccess = (data, token, message) => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_SUCCESS,
        payload: {data, token, message}
    }
}

const signInFail = message => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_FAIL,
        payload: message
    }
}

const signIn = (user, navigate) => {
    return async dispatch => {
        try {
            dispatch(signInRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/login`,
                data: user
            });
            const {data, token, message} = response.data;
            dispatch(signInSuccess(data, token, message));
            navigate('/');
            localStorage.setItem(CONSTANTS.AIDEN_TRUST_CLIENT_TOKEN_KEY, token);
            localStorage.setItem(CONSTANTS.AIDEN_TRUST_CLIENT_AUTH_DATA_KEY, JSON.stringify(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(signInFail(message));
        }
    }
}


const forgotPasswordRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.FORGOT_PASSWORD_REQUEST
    }
}

const forgotPasswordSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.FORGOT_PASSWORD_SUCCESS,
        payload: {data, token}
    }
}

const forgotPasswordFail = message => {
    return {
        type: AUTH_ACTION_TYPES.FORGOT_PASSWORD_FAIL,
        payload: message
    }
}

const forgotPassword = user => {
    return async dispatch => {
        try {
            dispatch(forgotPasswordRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/password/forgot`,
                data: user
            });
            const {data, message} = response.data;
            dispatch(forgotPasswordSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(forgotPasswordFail(message));
        }
    }
}


const resetPasswordRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.RESET_PASSWORD_REQUEST
    }
}

const resetPasswordSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.RESET_PASSWORD_SUCCESS,
        payload: {data, token}
    }
}

const resetPasswordFail = message => {
    return {
        type: AUTH_ACTION_TYPES.RESET_PASSWORD_FAIL,
        payload: message
    }
}

const resetPassword = user => {
    return async dispatch => {
        try {
            dispatch(resetPasswordRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/password/reset`,
                data: user
            });
            const {data, message} = response.data;
            dispatch(resetPasswordSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data.error;
            dispatch(resetPasswordFail(message));
        }
    }
}


const changePasswordRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.CHANGE_PASSWORD_REQUEST
    }
}

const changePasswordSuccess = (message) => {
    return {
        type: AUTH_ACTION_TYPES.CHANGE_PASSWORD_SUCCESS,
        payload: message
    }
}

const changePasswordFail = message => {
    return {
        type: AUTH_ACTION_TYPES.CHANGE_PASSWORD_FAIL,
        payload: message
    }
}

const changePassword = (user, token) => {
    return async dispatch => {
        try {
            dispatch(changePasswordRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/password/change`,
                data: user,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {message} = response.data;
            dispatch(changePasswordSuccess(message));
        } catch (e) {
            const {message} = e.response.data;
            console.log(message)
            dispatch(changePasswordFail(message));
        }
    }
}


const updateProfileRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.UPDATE_PROFILE_REQUEST
    }
}

const updateProfileSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.UPDATE_PROFILE_SUCCESS,
        payload: {data, token}
    }
}

const updateProfileFail = message => {
    return {
        type: AUTH_ACTION_TYPES.UPDATE_PROFILE_FAIL,
        payload: message
    }
}

const updateProfile = (user, token, navigate) => {
    return async dispatch => {
        try {
            dispatch(updateProfileRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/profile`,
                data: user,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, message} = response.data;
            dispatch(updateProfileSuccess(data, message));
            navigate('/profile')
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateProfileFail(message));
        }
    }
}


const logoutRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_FAIL
    }
}

const logoutSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.LOGOUT_SUCCESS,
        payload: {data, token}
    }
}

const logoutFail = message => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_FAIL,
        payload: message
    }
}

const logout = (token, navigate) => {
    return async dispatch => {
        try {
            dispatch(logoutRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/logout`,
                data: token
            });
            const {data, message} = response.data;
            dispatch(logoutSuccess(data, message));
            localStorage.clear();
            navigate('/auth/login');
        } catch (e) {
            const {message} = e.response.data;
            dispatch(logoutFail(message));
        }
    }
}


const getProfileRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.GET_PROFILE_REQUEST
    }
}

const getProfileSuccess = (data, token, bankAccount) => {
    return {
        type: AUTH_ACTION_TYPES.GET_PROFILE_SUCCESS,
        payload: {data, token, bankAccount}
    }
}

const getProfileFail = message => {
    return {
        type: AUTH_ACTION_TYPES.SIGN_IN_FAIL,
        payload: message
    }
}

const getProfile = (token) => {
    return async dispatch => {
        try {
            dispatch(getProfileRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/profile`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, bankAccount} = response.data;
            dispatch(getProfileSuccess(data, token, bankAccount));
        } catch (e) {
            console.log(e.message)
            const {message} = e.response.data;
            dispatch(getProfileFail(message));
        }
    }
}


const verifyAccountRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_REQUEST
    }
}

const verifyAccountSuccess = (data, token) => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_SUCCESS,
        payload: {data, token}
    }
}

const verifyAccountFail = message => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_FAIL,
        payload: message
    }
}

const verifyAccount = (user, token) => {
    return async dispatch => {
        try {
            dispatch(verifyAccountRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/auth/profile/verify/${token}`,
                data: user
            });
            const {data, message} = response.data;
            dispatch(verifyAccountSuccess(data, message));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(verifyAccountFail(message));
        }
    }
}

const nextPage = () => {
    return {
        type: AUTH_ACTION_TYPES.NEXT_PAGE
    }
}

const previousPage = () => {
    return {
        type: AUTH_ACTION_TYPES.PREVIOUS_PAGE
    }
}

const goToPage = page => {
    return {
        type: AUTH_ACTION_TYPES.GO_TO_PAGE,
        payload: page
    }
}

const savePayment = payment => {
    return {
        type: AUTH_ACTION_TYPES.SAVE_PAYMENT,
        payload: payment
    }
}

const saveBankAccountInfo = bankAccount => {
    return {
        type: AUTH_ACTION_TYPES.SAVE_BANK_ACCOUNT_INFORMATION,
        payload: bankAccount
    }
}

const savePersonalInfo = personalInfo => {
    return {
        type: AUTH_ACTION_TYPES.SAVE_PERSONAL_INFORMATION,
        payload: personalInfo
    }
}

const saveAccountInfo = accountInfo => {
    return {
        type: AUTH_ACTION_TYPES.SAVE_ACCOUNT_INFORMATION,
        payload: accountInfo
    }
}

export const AUTH_ACTION_CREATORS = {
    saveAccountInfo,
    savePersonalInfo,
    saveBankAccountInfo,
    savePayment,
    nextPage,
    previousPage,
    goToPage,
    logout,
    getProfile,
    verifyAccount,
    signIn,
    changePassword,
    updateProfile,
    resetPassword,
    forgotPassword
};
