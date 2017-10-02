 export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "INCREASE_VOTE_FOR_SINGLE_POST_SUCCESS":
      console.log(action)
      return action
      case "DECREASE_VOTE_FOR_SINGLE_POST_SUCCESS":
      console.log(action)
      return action
    default:
      return state;
  }
};

// export default postReducer