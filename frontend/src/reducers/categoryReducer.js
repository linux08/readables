
export const categoryReducer = (state = [], action) => {

  console.log(action.type)
  switch (action.type) {

    case 'FETCH_CATEGORY_SUCCESS':
      //return { ...state, [action.category.id]: action.category }
      return { ...state, category: action.category }
    case 'FETCH_POST_IN_CATEGORY_SUCCESS':
      let a = action.data.map(b => b.id)
      console.log(a)
      return { ...state, postincategory: action.data }
    // return { ...state, [action.category.id]: action.category }
    // case "INCREASE_VOTE_FOR_SINGLE_POST_SUCCESS":
    //   console.log(action.posts)
    //   return action
    // case "DECREASE_VOTE_FOR_SINGLE_POST_SUCCESS":
    //   console.log(action.posts)
    //   return action

    default:
      return state;
  }
};

