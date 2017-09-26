
const initialState = {
  fetching: true,
  fetched: false,
  category: []
}


 export const categoryReducer = (state = initialState, action) => {
  console.log(action.type)

  //FETCH_CATEGORY_OF_A_POST_SUCCESS
  switch (action.type) {
    case 'FETCH_CATEGORY_OF_A_POST_SUCCESS':
      console.log('FETCH_CATEGORY_OF_A_POST_SUCCESS');
      return { ...state, category: action.category }
    case 'FETCH_POSTS_SUCCESS':
      console.log('FETCH_POSTS_SUCCESS')
      return { ...state, category: action.category }

    default:
      return { ...state, category: { 'a': '2' } };
  }
};

