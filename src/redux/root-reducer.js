import {combineReducers} from "redux";
import uiReducer from "./ui/ui-reducer";
import transactionReducer from "./transactions/transaction-reducer";
import dashboardReducer from "./dashboard/dashboard-reducer";
import authReducer from "./auth/auth-reducer";
import requestReducer from "./requests/request-reducer";


const rootReducer = combineReducers({
    ui: uiReducer,
    transaction: transactionReducer,
    dashboard: dashboardReducer,
    auth: authReducer,
    requests: requestReducer
});

export default rootReducer;
