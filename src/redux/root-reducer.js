import {combineReducers} from "redux";
import uiReducer from "./ui/ui-reducer";
import transactionReducer from "./transactions/transaction-reducer";


const rootReducer = combineReducers({
    ui: uiReducer,
    transaction: transactionReducer
});

export default rootReducer;
