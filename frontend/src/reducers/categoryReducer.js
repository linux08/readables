
export const categoryReducer = (state = [], action) => {

  console.log(action.type)
  switch (action.type) {

    case 'FETCH_CATEGORY_SUCCESS':
      return { ...state, category: action.category }
    case 'FETCH_POSTS_SUCCESS':
      let posts = {}
      for (let num in action.data) {
        posts[action.data[num].id] = action.data[num]
      }
      return { ...state, posts }



    case 'FETCH_CATEGORY_OF_A_POST_SUCCESS':
      return { ...state, postincategory: action.data }


    case "INCREASE_VOTE_FOR_SINGLE_POST_SUCCESS":
      let newState = state.posts
      newState = Object.keys(newState).map((p) => {
        if (newState[p].id == action.id) {

          newState[p].voteScore = action.post.voteScore
          console.log(newState)
          return newState
        }
      })
      return { ...state, newState }

    case "DECREASE_VOTE_FOR_SINGLE_POST_SUCCESS":
       newState = state.posts
      newState = Object.keys(newState).map((p) => {
        if (newState[p].id == action.id) {

          newState[p].voteScore = action.post.voteScore
          console.log(newState)
          return newState
        }
      })
      return { ...state, newState }


    default:
      return state;
  }
};

