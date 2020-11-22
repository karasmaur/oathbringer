import axios from "axios";

export const getCampaigns = () => async dispatch => {
  const res = await axios.get("/api/campaign/all");
  dispatch({
      type: "GET_CAMPAIGNS",
      payload: res.data
  });
};

export const getCampaign = (id) => async dispatch => {
    const res = await axios.get(`/api/campaign/${id}`);
    dispatch({
        type: "GET_CAMPAIGN",
        payload: res.data
    });
};

export const createNewCampaign = (newCampaign, history) => async dispatch => {
    try {
        await axios.post("/api/campaign", newCampaign);
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
