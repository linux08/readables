import * as actionTypes from './actiontypes';
import * as API from '../utils/API.js'
import Axios from 'axios'


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



export const fetchPostInCategory = () => {

    return function (dispatch) {
        return API.fetchPosts()
            .then((data) => {
                console.log('getting fetch category of a post')
                console.log(data.data)
                dispatch(fetchPost(data.data))
                //  })
            })
            .catch(err => console.log(err))
    }
}


export const downvote = (id, option) => {
    return function (dispatch) {
        return API.vote(id, option)
            .then((res) => {
                console.log(res)
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


