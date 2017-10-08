export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_POSTS_SUCCESS":
      console.log(action)

      return {
        ...state, [action.id]: action.posts
      }
    // state = [action.id]: action.posts
    // return state
    //  return {state,post:action.posts}
    // case "INCREASE_VOTE_FOR_SINGLE_POST_SUCCESS":
    //   console.log(action)
    //   return action
    // case "DECREASE_VOTE_FOR_SINGLE_POST_SUCCESS":
    //   console.log(action)
    //   return action
    default:
      return state;
  }
};

// export default postReducer