export const commentReducer = (state = [], action) => {

  console.log(action.type)
  switch (action.type) {

    case 'FETCH_COMMENT_FOR_SINGLE_POST_SUCCESS':
      console.log(action)
      console.log('FETCH_COMMENT_FOR_SINGLE_POST_SUCCESS')
      return {
        ...state, [action.id]: action.comment
      }
    case 'INCREASE_VOTE_FOR_SINGLE_COMMENT_SUCCESS':
      console.log(action)
      let newState = state.comments
      newState = Object.keys(newState).map((p) => {
        console.log(newState)
        // if (newState[p].id == action.id) {

        //   newState[p].voteScore = action.post.voteScore
        //   console.log(newState)
        //   return newState
        // }
      })
      console.log(newState)
    // return { ...state, newState }
    case 'DECREASE_VOTE_FOR_SINGLE_COMMENT_SUCCESS':
      // console.log(action)
      console.log(state)
      var statearray = Object.values(state)
      var a = statearray.map((p) => {
        p.map((c) => {
          console.log(c.id)
          console.log(action.id)
          console.log(action.post.voteScore)
          if (c.id == action.id) {

            c.voteScore = action.post.voteScore
            console.log(c.voteScore)
            return c
          }
        })
        return p
      })
      // var statearray = Object.values(state)
      console.log(a)
      //newState = Object.keys(newState).map((p) => {
      // console.log(newState)
      // if (newState[p].id == action.id) {

      //   newState[p].voteScore = action.post.voteScore
      //   console.log(newState)
      //   return newState
      // }
      // })
      //console.log(newState)
      console.log(action)
    default:
      return state;
  }
};








