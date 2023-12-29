import axios from 'axios';
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,FETCH_USER_POSTS_SUCCESS,FETCH_USER_POSTS_FAILURE ,FETCH_COMMENTS_SUCCESS ,FETCH_COMMENTS_FAILURE} from "./actionType";

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const users = response.data;

      // Dispatch the success action with the fetched users
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      // Dispatch the failure action if there's an error
      dispatch(fetchUsersFailure(error.message));
    }
  };
};
export const fetchUserPostsSuccess = (userPosts) => ({
    type: FETCH_USER_POSTS_SUCCESS,
    payload: userPosts,
  });
  
  export const fetchUserPostsFailure = (error) => ({
    type: FETCH_USER_POSTS_FAILURE,
    payload: error,
  });
  
  export const fetchUserPosts = (userId) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const userPosts = response.data;
  
        // Dispatch the success action with the fetched user posts
        dispatch(fetchUserPostsSuccess(userPosts));
      } catch (error) {
        // Dispatch the failure action if there's an error
        dispatch(fetchUserPostsFailure(error.message));
      }
    };
  };



  export const fetchCommentsSuccess = (comments) => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  });
  
  export const fetchCommentsFailure = (error) => ({
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  });
  
  export const fetchComments = (postId) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const comments = response.data;
  
        // Dispatch the success action with the fetched comments
        dispatch(fetchCommentsSuccess(comments));
      } catch (error) {
        // Dispatch the failure action if there's an error
        dispatch(fetchCommentsFailure(error.message));
      }
    };
  };