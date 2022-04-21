import {AUTH_ACTION_TYPES} from "./auth-action-types";

const INITIAL_STATE = {
    authData: {
        email: 'dev.stanley.hayford@gmail.com',
        phoneNumber: '+233270048319',
        status: 'Active'
    },
    authLoading: false,
    authError: null,
    token: null,
    page: 0,
    accountInfo: {},
    paymentInfo: {},
    bankAccountInfo: {},
    personalInfo: {}
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_ACTION_TYPES.SIGN_IN_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.SIGN_IN_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.FORGOT_PASSWORD_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.RESET_PASSWORD_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.RESET_PASSWORD_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.CHANGE_PASSWORD_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.CHANGE_PASSWORD_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.UPDATE_PROFILE_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.LOGOUT_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.LOGOUT_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.LOGOUT_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.GET_PROFILE_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.GET_PROFILE_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.GET_PROFILE_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }


        case AUTH_ACTION_TYPES.VERIFY_ACCOUNT_REQUEST:
            return {
                ...state,
                authError: null,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.VERIFY_ACCOUNT_SUCCESS:
            return {
                ...state,
                authError: null,
                authLoading: false,
                token: action.payload.token,
                authData: action.payload.data
            }

        case AUTH_ACTION_TYPES.VERIFY_ACCOUNT_FAIL:
            return {
                ...state,
                authError: action.payload,
                authLoading: false,
                authData: null
            }

        case AUTH_ACTION_TYPES.PREVIOUS_PAGE:
            return {
                ...state,
                page: state.page - 1
            }

        case AUTH_ACTION_TYPES.NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case AUTH_ACTION_TYPES.GO_TO_PAGE:
            return {
                ...state,
                page: action.payload
            }

        case AUTH_ACTION_TYPES.SAVE_PERSONAL_INFORMATION:
            return {
                ...state,
                personalInfo: action.payload
            }

        case AUTH_ACTION_TYPES.SAVE_BANK_ACCOUNT_INFORMATION:
            return {
                ...state,
                bankAccountInfo: action.payload
            }
        case AUTH_ACTION_TYPES.SAVE_PAYMENT:
            return {
                ...state,
                paymentInfo: action.payload
            }

        case AUTH_ACTION_TYPES.SAVE_ACCOUNT_INFORMATION:
            return {
                ...state,
                accountInfo: action.payload
            }
        default:
            return state;
    }
}

export const selectAuth = state => state.auth

export default authReducer;
