import { combineReducers } from "redux";
import securityReducer from "./securityReducer";
import campaignReducer from "./campaignReducer";
import noteReducer from "./noteReducer";

export default combineReducers({
    security: securityReducer,
    campaign: campaignReducer,
    note: noteReducer
});
