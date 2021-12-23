export const initialState = {
  keyword: "",
  isSearching: false,
  isSearched: false,
  hasMoreResults: false,
  searchingError: null,
};

export const REQUEST_SEARCHING = "REQUEST_SEARCHING";
export const SUCCESS_SEARCHING = "SUCCESS_SEARCHING";
export const FAILED_SEARCHING = "FAILED_SEARCHING";

export const REQUEST_BACK = "REQUEST_BACK";
export const SUCCESS_BACK = "SUCCESS_BACK";
export const FAILURE_BACK = "FAILURE_BACK";

export const RESET_KEYWORD = "RESET_KEYWORD";

export const searchAction = (data) => {
  return { type: REQUEST_SEARCHING, data };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SEARCHING: {
      return {
        ...state,
        keyword: action.data,
        isSearching: true,
        isSearched: false,
        searchingError: null,
      };
    }
    case SUCCESS_SEARCHING: {
      return {
        ...state,
        isSearching: false,
        isSearched: true,
      };
    }
    case FAILED_SEARCHING: {
      return {
        ...state,
        isSearching: false,
        searchingError: action.error,
      };
    }

    case REQUEST_BACK: {
      return {
        ...state,
        isSearching: true,
        isSearched: false,
      };
    }
    case SUCCESS_BACK: {
      return {
        ...state,
        isSearching: false,
        isSearched: true,
      };
    }
    case FAILURE_BACK: {
      return {
        ...state,
        isSearching: false,
        searchingError: action.error,
      };
    }

    case RESET_KEYWORD: {
      return {
        ...state,
        keyword: "",
        isSearching: false,
        isSearched: false,
        searchingError: null,
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
