import {REQUEST_ACTION_TYPES} from "./request-action-types";

const INITIAL_STATE = {
    page: 0,
    accountInfo: {},
    paymentInfo: {},
    bankAccountInfo: {},
    personalInfo: {}
}

const requestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case REQUEST_ACTION_TYPES.PREVIOUS_PAGE:
            return {
                ...state,
                page: state.page - 1
            }

        case REQUEST_ACTION_TYPES.NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case REQUEST_ACTION_TYPES.GO_TO_PAGE:
            return {
                ...state,
                page: action.payload
            }

        case REQUEST_ACTION_TYPES.SAVE_PERSONAL_INFORMATION:
            return {
                ...state,
                personalInfo: action.payload
            }

        case REQUEST_ACTION_TYPES.SAVE_BANK_ACCOUNT_INFORMATION:
            return {
                ...state,
                bankAccountInfo: action.payload
            }
        case REQUEST_ACTION_TYPES.SAVE_PAYMENT:
            return {
                ...state,
                paymentInfo: action.payload
            }

        case REQUEST_ACTION_TYPES.SAVE_ACCOUNT_INFORMATION:
            return {
                ...state,
                accountInfo: action.payload
            }
        default:
            return state;
    }
}

export const selectRequest = state => state.requests

export default requestReducer;
