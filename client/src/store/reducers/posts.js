import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  GET_POST,
  UPDATE_LIKE,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "../actions/types";

const initialState = {
  posts: [],
  length: 0,
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
        posts: payload.posts,
        length: payload.length,
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
    case ADD_COMMENT:
      return {
        ...state,
        loading: false,
        post: { ...state.post, comments: payload },
      };
    case DELETE_COMMENT:
      return {
        ...state,
        loading: false,
        post: { ...state.post, comments: payload },
      };
    default:
      return state;
  }
}
