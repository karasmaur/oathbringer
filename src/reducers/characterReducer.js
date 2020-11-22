const initialState = {
    characters: [],
    character: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "GET_CHARACTERS":
            return {
                ...state,
                characters: action.payload
            };

        case "GET_CHARACTER":
            return {
                ...state,
                character: action.payload
            };

        case "DELETE_CHARACTER":
            return {
                ...state,
                character: state.characters.filter(
                    character => character.id !== action.payload
                )
            };
        default:
            return state;
    }
}
