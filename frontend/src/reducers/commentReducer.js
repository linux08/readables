export const commentReducer = (state = [], action) => {
  console.log('commentReducer')
  console.log(action)
  switch (action.type) {
    case 'FETCH_DETAILS_FOR_SINGLE_POST_SUCCESS':
      return { ...state, comment: action.comment }
    default:
      return state;
  }
};

