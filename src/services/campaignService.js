import axios from "axios";

export const getCampaigns = () => async dispatch => {
  const res = await axios.get("http://localhost:3001/campaigns");
  dispatch({
      type: "GET_CAMPAIGNS",
      payload: res.data
  });
};

export const getCampaign = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:3001/campaigns/${id}`);
    dispatch({
        type: "GET_CAMPAIGN",
        payload: res.data
    });
};

export const createNewCampaign = (newCampaign, history) => async dispatch => {
    try {
        await axios.post("http://localhost:3001/campaigns", newCampaign);
        history.push("/campaigns");
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