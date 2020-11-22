import { combineReducers } from "redux";
import securityReducer from "./securityReducer";
import campaignReducer from "./campaignReducer";
import noteReducer from "./noteReducer";
import npcReducer from "./npcReducer";
import characterReducer from "./characterReducer";

export default combineReducers({
    security: securityReducer,
    campaign: campaignReducer,
    note: noteReducer,
    npc: npcReducer,
    character: characterReducer,
});
