import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import search from "./search";
import nav from "./nav";
import detail from "./detail";
import mode from "./mode";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        console.log("default", action);
        return state;
    }
  },
  search,
  nav,
  detail,
  mode,
});

export default rootReducer;
