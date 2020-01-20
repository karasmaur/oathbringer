const initialState = {
    notes: [],
    note: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "GET_NOTES":
            return {
                ...state,
                notes: action.payload
            };

        case "GET_NOTE":
            return {
                ...state,
                note: action.payload
            };

        case "DELETE_NOTE":
            return {
                ...state,
                note: state.notes.filter(
                    note => note.id !== action.payload
                )
            };
        default:
            return state;
    }
}