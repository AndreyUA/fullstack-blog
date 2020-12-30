import { GET_POSTS, ADD_POST } from "../actions/types";

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
    default:
      return state;
  }
}
