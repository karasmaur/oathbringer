import axios from "axios";

export const getCharacters = () => async dispatch => {
    const res = await axios.get("/api/character/all");
    dispatch({
        type: "GET_CHARACTERS",
        payload: res.data
    });
};

export const getCharacter = (id) => async dispatch => {
    const res = await axios.get(`/api/character/${id}`);
    dispatch({
        type: "GET_CHARACTER",
        payload: res.data
    });
};

export const createNewCharacter = (newCharacter, history) => async dispatch => {
    try {
        await axios.post("/api/character", newCharacter);
        history.push("/character");
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
