import * as actionTypes from './actiontypes';
import * as API from '../utils/API.js'
import Axios from 'axios'


export const fetchCategorySuccess = (category) => {
    return {
        type: actionTypes.FETCH_CATEGORY_SUCCESS,
        category
    }
};

export const fetchCategoryOfAPostSuccess = (data) => {
    return {
        type: actionTypes.FETCH_CATEGORY_OF_A_POST_SUCCESS,
        data
    }
};

export const fetchPostInCategorySuccess = (data) => {
    return {
        type: actionTypes.FETCH_POST_IN_CATEGORY_SUCCESS,
        data
    }
}

export const fetchDetailsForSinglePostSuccess = (comment) => {
    return {
        type: actionTypes.FETCH_DETAILS_FOR_SINGLE_POST_SUCCESS,
        comment
    }
};

export const upVote = (post) => {
    return {
        type: actionTypes.INCREASE_VOTE_FOR_SINGLE_POST_SUCCESS,
        post
    }
}

export const downVote = (post) => {
    return {
        type: actionTypes.DECREASE_VOTE_FOR_SINGLE_POST_SUCCESS,
        post
    }
}



export const fetchPostInCategory = () => {

    return function (dispatch) {
        return API.fetchPosts()
            .then((data) => {
                dispatch(fetchPostInCategorySuccess(data.data))
            })
            .catch(err => console.log(err))
    }
}


export const downvote = (id, option) => {
    return function (dispatch) {
        return API.vote(id, option)
            .then((res) => {
                console.log(res)
                dispatch(upVote(res.data))
            }).catch(err => console.log(err))

    }
}


export const upvote = (id, option) => {
    return function (dispatch) {
        return API.vote(id, option)
            .then((res) => {
                console.log(res)
                dispatch(downVote(res.data))
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


