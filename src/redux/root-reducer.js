import {combineReducers} from "redux";
import uiReducer from "./ui/ui-reducer";
import transactionReducer from "./transactions/transaction-reducer";
import dashboardReducer from "./dashboard/dashboard-reducer";


const rootReducer = combineReducers({
    ui: uiReducer,
    transaction: transactionReducer,
    dashboard: dashboardReducer
});

export default rootReducer;
