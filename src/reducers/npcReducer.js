const initialState = {
    npcs: [],
    npc: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "GET_NPCS":
            return {
                ...state,
                npcs: action.payload
            };

        case "GET_NPC":
            return {
                ...state,
                npc: action.payload
            };

        case "DELETE_NPC":
            return {
                ...state,
                npc: state.npcs.filter(
                    npc => npc.id !== action.payload
                )
            };
        default:
            return state;
    }
}