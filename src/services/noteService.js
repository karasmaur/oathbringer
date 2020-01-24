import axios from "axios";


// Workaround to use the json-server before creating the actual backend.
export const getNotes = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:3001/campaigns/${id}`); // TODO: add "/notes" at the end
    dispatch({
        type: "GET_NOTES",
        payload: res.data.notes // TODO: Remove ".notes"
    });
};

export const getNote = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:3001/notes/${id}`);
    dispatch({
        type: "GET_NOTE",
        payload: res.data
    });
};

export const createNewNote = (campaignId, newNote, history) => async dispatch => {
    try {
        await axios.post("http://localhost:3001/notes", newNote);
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