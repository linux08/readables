
export const categoryReducer = (state = [], action) => {

  console.log(action.type)
  switch (action.type) {

    case 'FETCH_CATEGORY_SUCCESS':
      return { ...state, category: action.category }

    case 'FETCH_POSTS_SUCCESS':
      let posts = {}
      var a = action.data.filter((p) => p.deleted == false)
      console.log(a)
      console.log(action.data)
      for (let num in a) {
        posts[a[num].id] = a[num]
      }
      console.log(posts)

      return { ...state, posts }



    case 'FETCH_CATEGORY_OF_A_POST_SUCCESS':
      console.log(action)
      return { ...state, postincategory: action.data }


    case "INCREASE_VOTE_FOR_SINGLE_POST_SUCCESS":
      let newState = state.posts
      newState = Object.keys(newState).map((p) => {
        if (newState[p].id == action.id) {

          newState[p].voteScore = action.post.voteScore
          console.log(newState)
          return newState
        }
      })
      return { ...state, newState }

    case "DECREASE_VOTE_FOR_SINGLE_POST_SUCCESS":
      newState = state.posts
      newState = Object.keys(newState).map((p) => {
        if (newState[p].id == action.id) {

          newState[p].voteScore = action.post.voteScore
          console.log(newState)
          return newState
        }
      })
      return { ...state, newState }




    case "SORT_BY_VOTE":

      var statearray = Object.values(state.posts)
      let aa = statearray.sort(function (a, b) {
        return b.voteScore - a.voteScore
      })
      posts = {}
      for (let num in aa) {

        posts[aa[num].id] = aa[num]
      }

      console.log(posts)
      return { ...state, posts }


    case "SORT_BY_TIME":

      var statearray = Object.values(state.posts)
      aa = statearray.sort(function (a, b) {
        let date1 = b.timestamp

        let date2 = a.timestamp

        if (date1 < date2) {
          return -1
        }
        if (date1 > date2) {
          return 1
        }
        return 0
      })
      posts = {}
      for (let num in aa) {
        posts[aa[num].id] = aa[num]
      }

      return { ...state, posts }

    case "NEW_POST":

    case "EDIT_POST":

    case "DELETE_POST_SUCCESS":
      statearray = Object.values(state.posts)

      let a = statearray.filter((p) => p.id != action.id)
      console.log(a)
      posts = {}
      for (let num in a) {
        posts[a[num].id] = a[num]
      }
      console.log(posts)
      return { ...state, posts }



    default:
      return state;
  }
};




