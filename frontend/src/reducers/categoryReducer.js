
export const categoryReducer = (state = [], action) => {

  console.log(action.type)
  switch (action.type) {

    case 'FETCH_CATEGORY_SUCCESS':
      return { ...state, category: action.category }

    case 'FETCH_POSTS_SUCCESS':
      let posts = {}
      for (let num in action.data) {
        posts[action.data[num].id] = action.data[num]
      }
      return { ...state, posts }



    case 'FETCH_CATEGORY_OF_A_POST_SUCCESS':
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
    // function sortObject(obj) {
    //   return Object.keys(obj)
    //     .sort().reduce((a, v) => {
    //     a[v] = obj[v];
    //     return a; }, {});
    // }
      
    var keys = Object.keys(state.posts);

    keys.sort((a, b) => {
      if (a.voteScore < b.voteScore) {
        return -1;
      }
      if (a.voteScore > b.voteScore) {
        return 1;
      }
      // a.voteScore must be equal to b.voteScore
      return 0;
    }).reduce((a,v) => {
      console.log(state.posts[v])
      console.log(state.posts[a])
      return state.posts[v]
    },{})
    console.log(keys)
    // var comment = keys.map(key => state.posts[key]);
    // console.log(comment)
    // comment.sort((a, b) => {
    //   if (a.voteScore < b.voteScore) {
    //     return -1;
    //   }
    //   if (a.voteScore > b.voteScore) {
    //     return 1;
    //   }
    //   // a.voteScore must be equal to b.voteScore
    //   return 0;
    // });
    //console.log(comment)
    case "SORT_BY_TIME":
      // const sbt = [state.posts]

      // let aa = sbt.sort(function (a, b) {
      //   let date1 = b.timestamp
      //   let date2 = a.timestamp
      //   if (date1 < date2) {
      //     return -1
      //   }
      //   if (date1 > date2) {
      //     return 1
      //   }
      //   return 0
      // })
      // console.log(aa)

    // return aa

    default:
      return state;
  }
};

