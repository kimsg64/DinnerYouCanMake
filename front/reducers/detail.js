export const initialState = {
  isShowingDetail: false,
};

export const ENTER_DETAIL_PAGE = "ENTER_DETAIL_PAGE";
export const LEAVE_DETAIL_PAGE = "LEAVE_DETAIL_PAGE";

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
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
