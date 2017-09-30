
export const categoryReducer = (state = [], action) => {

  console.log(action.type)
  switch (action.type) {
    case 'FETCH_CATEGORY_OF_A_POST_SUCCESS':
      return { ...state, posts: action.data }
    case 'FETCH_CATEGORY_SUCCESS':
      return { ...state, category: action.category }
    case 'FETCH_POST_IN_CATEGORY_SUCCESS':
      return { ...state, postincategory: action.data }


    default:
      return state;
  }
};

