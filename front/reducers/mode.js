export const initialState = {
  isDark: false,
};

export const TOGGLE_MODE = "TOGGLE_MODE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODE: {
      return {
        ...state,
        isDark: !state.isDark,
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
