import * as types from "../constants/commonUI.constants";
const initialState = {
  toastMessage: { message: "", status: "" },
  isFullyLoaded: true, // 나중에 false로 바꾸기
};

function commonUiReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.INITIALIZE_SUCCESS:
    case types.INITIALIZE_FAIL:
      return { ...state, isFullyLoaded: true };
    case types.SET_TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: {
          ...state.toastMessage,
          message: payload.message,
          status: payload.status,
        },
      };

    default:
      return state;
  }
}
export default commonUiReducer;
