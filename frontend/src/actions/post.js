import * as actionTypes from './actiontypes'
import * as API from '../utils/API.js'

const apiUrl = 'http://localhost/5001';



export const deleteSingleComment = (id, data) => {
    return {
        type: actionTypes.DELETE_POST_SUCCESS,
        id,
        data
    }
}



export const fetchSinglePostSuccess = (posts, id) => {
    return {
        type: actionTypes.FETCH_SINGLE_POSTS_SUCCESS,
        posts,
        id
    }
};

export const updateSinglePostSuccess = (posts) => {
    return {
        type: actionTypes.UPDATE_SINGLE_POSTS_SUCCESS,
        posts
    }
};


export const createPostSuccess = (post) => {
    return {
        type: actionTypes.CREATE_POST_SUCCESS,
        post
    }
};

export const deletePostSuccess = (post) => {
    return {
        type: actionTypes.DELETE_POST_SUCCESS,
        post
    }
};


export const deleteSinglePost = (id, data) => {
    return {
        type: actionTypes.DELETE_SINGLE_POST_SUCCESS,
        id,
        data
    }
}


export const upVote = (post, id) => {
    return {
        type: actionTypes.INCREASE_VOTE_POST_SUCCESS,
        post,
        id
    }
}

export const downVote = (post, id) => {
    return {
        type: actionTypes.DECREASE_VOTE_POST_SUCCESS,
        post,
        id
    }
}

export const fetchSinglePosts = (id) => {
    return function (dispatch) {
        return API.fetchDetailsForSinglePost(id)
            .then((res) => {
                console.log(res)
                dispatch(fetchSinglePostSuccess(res.data, id))
            }).catch(err => console.log(err))
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


export const DeleteSinglePost = (id) => {
    return function (dispatch) {
        return API.deleteSinglePost(id)
            .then((data) => {
                dispatch(deleteSinglePost(id, data))
            })
            .catch(err => console.log(err))
    }
}




