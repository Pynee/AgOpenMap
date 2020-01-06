import produce, { original } from "immer";
import initialState from "../storage/storage";

const fieldReducer = (state = initialState.userReducer, action) => {
  switch (action.type) {
    case "USER_UPDATE":
      return { ...state, ...action.payload };
    default:
      if (!action.type.startsWith("@@")) {
        console.log("UNKNOWN REDUCER TYPE?:", action);
      }
      return state;
  }
};

export default fieldReducer;
