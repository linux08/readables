export const commentReducer = (state = [], action) => {

  console.log(action.type)
  switch (action.type) {
  
    case 'FETCH_COMMENT_FOR_SINGLE_POST_SUCCESS':
      console.log(action)
      console.log('FETCH_COMMENT_FOR_SINGLE_POST_SUCCESS')
      var a = action.comment
      return { 
        ...state, [action.id] : action.comment      }

    default:
      return state;
  }
};








