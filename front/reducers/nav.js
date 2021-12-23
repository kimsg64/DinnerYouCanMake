export const initialState = {
  isDisplayed: false,
};

export const TOGGLE_NAV = "TOGGLE_NAV";
export const CLOSE_NAV = "CLOSE_NAV";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV: {
      return {
        ...state,
        isDisplayed: !state.isDisplayed,
      };
    }
    case CLOSE_NAV: {
      return {
        ...state,
        isDisplayed: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
