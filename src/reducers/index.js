import { combineReducers } from "redux";
import securityReducer from "./securityReducer";
import campaignReducer from "./campaignReducer";
import noteReducer from "./noteReducer";
import npcReducer from "./npcReducer";

export default combineReducers({
    security: securityReducer,
    campaign: campaignReducer,
    note: noteReducer,
    npc: npcReducer
});
