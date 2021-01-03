import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  GET_POST,
  UPDATE_LIKE,
} from "../actions/types";

const initialState = {
  posts: [],
  post: null,
  loading: true,
};

export default function posts(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    case ADD_POST:
      return {
        ...state,
        loading: false,
        posts: [payload, ...state.posts],
      };
    case DELETE_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post._id !== payload),
      };
    case GET_POST:
      return {
        ...state,
        loading: false,
        post: payload,
      };
    case UPDATE_LIKE:
      return {
        ...state,
        loading: false,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
      };
    default:
      return state;
  }
}
