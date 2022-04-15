import {transactions} from "./transaction-data";

const INITIAL_STATE = {
    transactions: [],
    transactionDetail: {},
    transactionLoading: false,
    transactionError: false,
    totalTransactions: 0
}
const transactionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const selectTransaction = state => state.transaction;

export default transactionReducer;
