import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE ,FETCH_USER_POSTS_SUCCESS,FETCH_USER_POSTS_FAILURE,FETCH_COMMENTS_SUCCESS,FETCH_COMMENTS_FAILURE} from "./actionType";

const initialState = {
  comments:[],
  users: [],
  userPosts:[],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, error: null };
    case FETCH_USERS_FAILURE:
      return { ...state, users: [], error: action.payload };
      case FETCH_USER_POSTS_SUCCESS:
        return { ...state, userPosts: action.payload, error: null };
      case FETCH_USER_POSTS_FAILURE:
        return { ...state, userPosts: [], error: action.payload };
        case FETCH_COMMENTS_SUCCESS:
          return { ...state, comments: action.payload, error: null };
        case FETCH_COMMENTS_FAILURE:
          return { ...state, comments: [], error: action.payload };
        default:
          return state;
  }
};

export default reducer;