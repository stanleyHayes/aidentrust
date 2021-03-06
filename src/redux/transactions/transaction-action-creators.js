import axios from "axios";
import {CONSTANTS} from "../../utils/constants/constants";
import {TRANSACTIONS_ACTION_TYPES} from "./transaction-action-types";

const createTransactionRequest = () => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.CREATE_TRANSACTION_REQUEST
    }
}

const createTransactionSuccess = (data) => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.CREATE_TRANSACTION_SUCCESS,
        payload: data
    }
}

const createTransactionFailure = message => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.CREATE_TRANSACTION_FAIL,
        payload: message
    }
}

const createTransaction = (transaction, token, handleClose) => {
    return async dispatch => {
        try {
            dispatch(createTransactionRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.URL_BASE_SERVER}/transactions`,
                data: transaction,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(createTransactionSuccess(data));
            handleClose();
        } catch (e) {
            handleClose();
            const {message} = e.response.data;
            dispatch(createTransactionFailure(message));
        }
    }
}


const getTransactionRequest = () => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTION_REQUEST
    }
}

const getTransactionSuccess = (data) => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTION_SUCCESS,
        payload: data
    }
}

const getTransactionFailure = message => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTION_FAIL,
        payload: message
    }
}

const getTransaction = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(getTransactionRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/transactions/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(getTransactionSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getTransactionFailure(message));
        }
    }
}


const getTransactionsRequest = () => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_REQUEST
    }
}

const getTransactionsSuccess = (data, count) => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_SUCCESS,
        payload: {data, count}
    }
}

const getTransactionsFailure = message => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_FAIL,
        payload: message
    }
}

const getTransactions = (token, query) => {
    return async dispatch => {
        try {
            dispatch(getTransactionsRequest());
            const response = await axios({
                method: 'GET',
                url: `${CONSTANTS.URL_BASE_SERVER}/transactions?${query ? query : null}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data, count} = response.data;
            dispatch(getTransactionsSuccess(data, count));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(getTransactionsFailure(message));
        }
    }
}


const updateTransactionRequest = () => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.UPDATE_TRANSACTION_REQUEST
    }
}

const updateTransactionSuccess = (data) => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.UPDATE_TRANSACTION_SUCCESS,
        payload: data
    }
}

const updateTransactionFailure = message => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.UPDATE_TRANSACTION_FAIL,
        payload: message
    }
}

const updateTransaction = (transaction, ID, token) => {
    return async dispatch => {
        try {
            dispatch(updateTransactionRequest());
            const response = await axios({
                method: 'PUT',
                url: `${CONSTANTS.URL_BASE_SERVER}/transactions/${ID}`,
                data: transaction,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(updateTransactionSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(updateTransactionFailure(message));
        }
    }
}


const deleteTransactionRequest = () => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.DELETE_TRANSACTION_REQUEST
    }
}

const deleteTransactionSuccess = (data) => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.DELETE_TRANSACTION_SUCCESS,
        payload: data
    }
}

const deleteTransactionFailure = message => {
    return {
        type: TRANSACTIONS_ACTION_TYPES.DELETE_TRANSACTION_FAIL,
        payload: message
    }
}

const deleteTransaction = (ID, token) => {
    return async dispatch => {
        try {
            dispatch(deleteTransactionRequest());
            const response = await axios({
                method: 'DELETE',
                url: `${CONSTANTS.URL_BASE_SERVER}/transactions/${ID}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const {data} = response.data;
            dispatch(deleteTransactionSuccess(data));
        } catch (e) {
            const {message} = e.response.data;
            dispatch(deleteTransactionFailure(message));
        }
    }
}


export const TRANSACTION_ACTION_CREATORS = {
    createTransaction,
    deleteTransaction,
    updateTransaction,
    getTransactions,
    getTransaction
};
