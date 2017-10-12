export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_POSTS_SUCCESS":
      console.log(action)

      return {
        ...state, [action.id]: action.posts
      }

    case "DELETE_SINGLE_POST_SUCCESS":
      console.log('post deleted');

    case "INCREASE_VOTE_POST_SUCCESS":

      let post = {}
      post[action.post.id] = action.post
      console.log(post)
      return post




    case "DECREASE_VOTE_POST_SUCCESS":
      post = {}
      post[action.post.id] = action.post
      console.log(post)
      return post

    default:
      return state;
  }
};

// export default postReducer