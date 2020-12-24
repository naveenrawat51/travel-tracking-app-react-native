import axios from "../../api/tracker";
import { RESET } from "../locationContext/location.action";

export const FETCH_TRACK = "FETCH_TRACK";

export const createTrack = async (locationDispatch, name, locations) => {
  await axios.post("/tracks", { name, locations });
  locationDispatch({ type: RESET });
};

export const getTracks = async (dispatch) => {
  const response = await axios.get("/tracks");
  dispatch({ type: FETCH_TRACK, tracks: response.data });
};
