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

      let a = state
      let updatedstate = a[action.parentid].map((d) => {

        if (d.id == action.id) {
          d.voteScore = d.voteScore + 1
        }
        return d
      })
      console.log(updatedstate)

      console.log(state)

    case 'DECREASE_VOTE_FOR_SINGLE_COMMENT_SUCCESS':
      let a = state
      let updatedstate = a[action.parentid].map((d) => {

        if (d.id == action.id) {
          d.voteScore = d.voteScore - 1
        }
        return d
      })
      console.log(updatedstate)

      console.log(state)

    default:
      return state;
  }
};








