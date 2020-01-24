import axios from "axios";


// Workaround to use the json-server before creating the actual backend.
export const getNpcs = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:3001/campaigns/${id}`); // TODO: add "/npcs" at the end
    dispatch({
        type: "GET_NPCS",
        payload: res.data.npcs // TODO: Remove ".npcs"
    });
};

export const getNpc = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:3001/npcs/${id}`);
    dispatch({
        type: "GET_NPC",
        payload: res.data
    });
};

export const createNewNpc = (campaignId, newNpc, history) => async dispatch => {
    try {
        await axios.post("http://localhost:3001/npcs", newNpc);
        dispatch({
            type: "GET_ERRORS",
            payload: {}
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: "GET_ERRORS",
            payload: err.response.data
        });
    }
};