export const initialState = {
  keyword: "",
  isSearching: false,
  isSearched: false,
  hasMoreResults: false,
  searchingError: null,
};

export const REQUEST_SEARCHING = "REQUEST_SEARCHING";
export const SUCCEED_IN_SEARCHING = "SUCCEED_IN_SEARCHING";
export const FAILED_TO_SEARCH = "FAILED_TO_SEARCH";

export const REQUEST_BACK = "REQUEST_BACK";
export const SUCCEED_IN_BACK = "SUCCEED_IN_BACK";
export const FAILED_TO_BACK = "FAILED_TO_BACK";

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
    case SUCCEED_IN_SEARCHING: {
      return {
        ...state,
        isSearching: false,
        isSearched: true,
      };
    }
    case FAILED_TO_SEARCH: {
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
    case SUCCEED_IN_BACK: {
      return {
        ...state,
        isSearching: false,
        isSearched: true,
      };
    }
    case FAILED_TO_BACK: {
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
