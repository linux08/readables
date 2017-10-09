export const commentReducer = (state = [], action) => {

  switch (action.type) {

    case 'FETCH_COMMENT_FOR_SINGLE_POST_SUCCESS':
      console.log('FETCH_COMMENT_FOR_SINGLE_POST_SUCCESS')
      return {
        ...state, [action.id]: action.comment
      }
    case 'INCREASE_VOTE_FOR_SINGLE_COMMENT_SUCCESS':
      let d = state[action.parentid]
      let updatedstate = d.map((d) => {

        if (d.id == action.id) {
          d.voteScore = action.post.voteScore
        }
        return d
      })

      return { ...state, [action.parentid]: updatedstate }

    case 'DECREASE_VOTE_FOR_SINGLE_COMMENT_SUCCESS':

      updatedstate = state[action.parentid].map((d) => {

        if (d.id == action.id) {
          d.voteScore = action.post.voteScore
        }
        return d
      })
      return { ...state, [action.parentid]: updatedstate }


    case 'DELETE_COMMENT_SUCCESS':



    default:
      return state;
  }
};








