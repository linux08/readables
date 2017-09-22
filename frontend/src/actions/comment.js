import * as actionTypes from './actiontypes';
import axios from 'axios'

const apiUrl = 'http://localhost/5001';


export const fetchCommentForSinglePostSuccess = (comment) => {
    return {
        type: actionTypes.FETCH_COMMENT_FOR_SINGLE_POST_SUCCESS,
        comment
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
export const updateVoteForSinglePostSuccess = (comment) => {
    return {
        type: actionTypes.UPDATE_VOTE_FOR_SINGLE_POST_SUCCESS,
        comment
    }
};

export const createCommentSuccess = (comment) => {
    return {
        type: actionTypes.CREATE_COMMENT_SUCCESS,
        comment
    }
};

export const deleteCommentSuccess = (comment) => {
    return {
        type: actionTypes.DELETE_COMMENT_SUCCESS,
        comment
    }
};


export const deleteSingleComment = (comment) => {
    return (dispatch) => {
        return Axios.delete(apiUrl, post, {
            headers: {
                "name": "react"
            }
        })
            .then(response => {
                dispatch(deleteCommentSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};



export const updateDetailsOnComment = (comment) => {
    return (dispatch) => {
        return Axios.put(apiUrl`/${'/comments/:id'}`, comment, {
            headers: {
                "name": "react"
            }
        })
            .then(response => {
                dispatch(updateDetailsForSinglePostSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const updateVoteOnComment = (comment) => {
    return (dispatch) => {
        return Axios.post(apiUrl`/${'/comments/:id'}`, comment, {
            headers: {
                "name": "react"
            }
        })
            .then(response => {
                dispatch(updateVoteForSinglePostSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchDetailsForSinglePost = () => {
    return (dispatch) => {
        return Axios.get(apiUrl`/${'/comments/:id'}`, {
            headers: {
                "name": "react"
            }
        })
            .then(response => {
                dispatch(fetchDetailsForSinglePostSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const createComment = (comment) => {
    return (dispatch) => {
        return Axios.post(apiUrl`/${'comments'}`, comment, {
            headers: {
                "name": "react"
            }
        })
            .then(response => {
                dispatch(createCommentSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchCommentSinglePost = () => {
    return (dispatch) => {
        return Axios.get(apiUrl`/${'/posts/:id/comments'}`, {
            headers: {
                "name": "react"
            }
        })
            .then(response => {
                dispatch(fetchCommentForSinglePostSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
