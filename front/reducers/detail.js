export const initialState = {
  isShowingDetail: false,
  selectedSequence: "",
};

export const ENTER_DETAIL_PAGE = "ENTER_DETAIL_PAGE";
export const LEAVE_DETAIL_PAGE = "LEAVE_DETAIL_PAGE";

export const REQUEST_TO_SELECT_POST = "REQUEST_TO_SELECT_POST";
export const SUCCEED_IN_SELECTING_POST = "SUCCEED_IN_SELECTING_POST";
export const FAILED_TO_SELECT_POST = "FAILED_TO_SELECT_POST";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ENTER_DETAIL_PAGE: {
      return {
        ...state,
        isShowingDetail: true,
      };
    }
    case LEAVE_DETAIL_PAGE: {
      return {
        ...state,
        isShowingDetail: false,
      };
    }
    case REQUEST_TO_SELECT_POST: {
      return {
        ...state,
        selectedSequence: action.data,
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
