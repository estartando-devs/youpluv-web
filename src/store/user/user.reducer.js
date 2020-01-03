import { TYPES } from "./user.action";

const initial_state = {
  data: {},
  error: "",
  loading: false
};

const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST_LOGIN:
      return { ...state, loading: true };
      break;
    case TYPES.SUCCESS_LOGIN:
      return { ...state, data: action.payload.user, loading: false };
    case TYPES.ERROR_LOGIN:
      return { ...state, error: action.payload.error, loading: false };
    case TYPES.REMOVE_USER:
      return { ...state, data: {}, error: false, loading: false };
    case TYPES.REQUEST_REGISTER:
      return { ...state, loading: true };
      break;
    case TYPES.SUCCESS_REGISTER:
      return { ...state, data: action.payload.user, loading: false };
    case TYPES.ERROR_REGISTER:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};

export default userReducer