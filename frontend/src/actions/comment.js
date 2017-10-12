import * as actionTypes from './actiontypes';
import * as API from '../utils/API.js'
import Axios from 'axios'


export const editComment = (comment, parentid) => {
    return {
        type: actionTypes.EDIT_COMMENT_SUCCESS,
        comment,
        parentid
    }
}

export const addComment = (comment, parentid) => {
    return {
        type: actionTypes.CREATE_COMMENT_SUCCESS,
        comment,
        parentid
    }
}


export const commentUpVote = (post, id, parentid) => {
    return {
        type: actionTypes.INCREASE_VOTE_FOR_SINGLE_COMMENT_SUCCESS,
        post,
        id,
        parentid
    }
}

export const commentDownVote = (post, id, parentid) => {
    return {
        type: actionTypes.DECREASE_VOTE_FOR_SINGLE_COMMENT_SUCCESS,
        post,
        id,
        parentid
    }
}



export const fetchCommentForSinglePostSuccess = (comment, id) => {
    return {
        type: actionTypes.FETCH_COMMENT_FOR_SINGLE_POST_SUCCESS,
        comment,
        id
    }
};

export const fetchDetailsForSinglePostSuccess = (comment) => {
    return {
        type: actionTypes.FETCH_DETAILS_FOR_SINGLE_POST_SUCCESS,
        comment
    }
};

export const updateDetailsForSinglePostSuccess = (comment) => {
    return {
        type: actionTypes.UPDATE_DETAILS_FOR_SINGLE_POST_SUCCESS,
        comment
    }
};


export const createCommentSuccess = (comment) => {
    return {
        type: actionTypes.CREATE_COMMENT_SUCCESS,
        comment
    }
};

export const deleteCommentSuccess = (id, parentid, comment) => {
    return {
        type: actionTypes.DELETE_COMMENT_SUCCESS,
        id,
        comment,
        parentid
    }
};

export const editcomment = (data, parentid) => {
    console.log('trying to add coment')
    return function (dispatch) {
        return API.createComment(data)
            .then((data) => {
                dispatch(addComment(data.data, parentid))
            })
            .catch(err => console.log(err))
    }
}



export const addcomment = (data, parentid) => {
    return function (dispatch) {
        return API.createComment(data)
            .then((data) => {
                dispatch(addComment(data.data, parentid))
            })
            .catch(err => console.log(err))
    }
}



export const deleteComment = (id, parentid) => {
    return function (dispatch) {
        return API.deleteSingleComment(id)
            .then((data) => {
                dispatch(deleteCommentSuccess(id, parentid, data))
            })
            .catch(err => console.log(err))
    }
}


export const fetchComment = (id) => {

    return function (dispatch) {
        return API.fetchCommentSinglePost(id)
            .then((res) => {
                dispatch(fetchCommentForSinglePostSuccess(res.data, id))
            }).catch(err => { throw (err) })
    }
}

export const commentdownvote = (id, parentid, option) => {
    return function (dispatch) {
        return API.commentvote(id, option)
            .then((res) => {
                dispatch(commentDownVote(res.data, id, parentid))
            }).catch(err => console.log(err))
    }
}


export const commentupvote = (id, parentid, option) => {
    return function (dispatch) {
        return API.commentvote(id, option)
            .then((res) => {
                dispatch(commentUpVote(res.data, id, parentid))
            }).catch(err => console.log(err))

    }
}


