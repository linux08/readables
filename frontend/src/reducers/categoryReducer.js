
const initialState = {
  category:{},
  posts: {}
}


export const categoryReducer = (state=[], action) => {

  console.log(action.type)
  switch (action.type) {
    case 'FETCH_CATEGORY_OF_A_POST_SUCCESS':
     return { ...state, posts: action.data }
    case 'FETCH_CATEGORY_SUCCESS':
      console.log('FETCH_CATEGORY_SUCCESS')
      console.log(action)
      return { ...state, category: action.category }

    default:
      return state;
  }
};

