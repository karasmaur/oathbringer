const initialState = {
    campaigns: [],
    campaign: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case "GET_CAMPAIGNS":
            return {
                ...state,
                campaigns: action.payload
            };

        case "GET_CAMPAIGN":
            return {
                ...state,
                campaign: action.payload
            };

        case "DELETE_CAMPAIGN":
            return {
                ...state,
                campaign: state.campaigns.filter(
                    campaign => campaign.id !== action.payload
                )
            };
        default:
            return state;
    }
}