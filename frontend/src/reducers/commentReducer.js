export const commentReducer = (state = [], action) => {

  switch (action.type) {

    case 'FETCH_COMMENT_FOR_SINGLE_POST_SUCCESS':
      console.log(action.comment)
      return {
        ...state, [action.id]: action.comment
      }

    case 'CREATE_COMMENT_SUCCESS':
      console.log(action)
      let newcomment = action.comment
      d = state[action.parentid]
      updatedstate = d.push(newcomment)


      console.log(updatedstate)
      console.log(state)

        console.log(
          { ...state }
        )
      return {
         state
        }
    //return { ...state, [action.parentid]: updatedstate }

    case 'EDIT_COMMENT_SUCCESS':



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
      console.log(action)
      updatedstate = state[action.parentid].filter((d) => {
        return d.id != action.id
      })
      return { ...state, [action.parentid]: updatedstate }



    default:
      return state;
  }
};








