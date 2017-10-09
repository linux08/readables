import * as actionTypes from './actiontypes';
import * as API from '../utils/API.js'



export const deleteSinglePost = (id, data) => {
    return {
        type: actionTypes.DELETE_POST_SUCCESS,
        id,
        data
    }
}

// export const createPost =(id) =>{
//     return {
//         type: actionTypes.DELETE_POST_SUCCESS,
//         id
//     }
// }

// export const updatePost =(id) =>{
//     return {
//         type: actionTypes.DELETE_POST_SUCCESS,
//         id
//     }
// }


export const sortByVote = (data) => {
    return {
        type: actionTypes.SORT_BY_VOTE,
        data
    }

}

export const sortByTime = (data) => {
    return {
        type: actionTypes.SORT_BY_TIME,
        data
    }
}

export const fetchCategorySuccess = (category) => {
    return {
        type: actionTypes.FETCH_CATEGORY_SUCCESS,
        category
    }
};

export const fetchPostInCategorySuccess = (data) => {
    return {
        type: actionTypes.FETCH_CATEGORY_OF_A_POST_SUCCESS,
        data
    }
};

export const fetchPost = (data) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        data
    }
}

export const fetchDetailsForSinglePostSuccess = (comment) => {
    return {
        type: actionTypes.FETCH_DETAILS_FOR_SINGLE_POST_SUCCESS,
        comment
    }
};

export const upVote = (post, id) => {
    return {
        type: actionTypes.INCREASE_VOTE_FOR_SINGLE_POST_SUCCESS,
        post,
        id
    }
}

export const downVote = (post, id) => {
    return {
        type: actionTypes.DECREASE_VOTE_FOR_SINGLE_POST_SUCCESS,
        post,
        id
    }
}


export const deletePost = (id) => {
    return function (dispatch) {
        return API.deleteSinglePost(id)
            .then((data) => {
                dispatch(deleteSinglePost(id, data))
            })
            .catch(err => console.log(err))
    }
}


export const fetchPostInCategory = () => {

    return function (dispatch) {
        return API.fetchPosts()
            .then((data) => {
                dispatch(fetchPost(data.data))
            })
            .catch(err => console.log(err))
    }
}


export const downvote = (id, option) => {
    return function (dispatch) {
        return API.vote(id, option)
            .then((res) => {
                dispatch(downVote(res.data, id))
            }).catch(err => console.log(err))

    }
}

//
export const upvote = (id, option) => {
    return function (dispatch) {
        return API.vote(id, option)
            .then((res) => {
                console.log(res)
                dispatch(upVote(res.data, id))
            }).catch(err => console.log(err))

    }
}



export const fetchCategory = () => {
    return function (dispatch) {
        return API.FetchCategory()
            .then((res) => {
                console.log(res)
                dispatch(fetchCategorySuccess(res.data))
            }).catch(err => console.log(err))

    }
}



export const fetchCategoryOfPost = (category) => {

    return function (dispatch) {
        return API.fetchPostInCategory(category)
            .then((res) => {

                console.log(res)
                dispatch(fetchPostInCategorySuccess(res.data))
            }).catch(err => console.log(err))

    }
}


