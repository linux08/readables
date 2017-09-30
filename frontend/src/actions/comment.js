import * as actionTypes from './actiontypes';
import Axios from 'axios'

const apiUrl = 'http://localhost/5001';



// GET /comments/:id
// USAGE:
//   Get the details for a single comment

// POST /comments/:id
// USAGE:
//   Used for voting on a comment.

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
    const url = apiUrl`/${'/comments/:id'}`
    return async (dispatch) => {
        try {
            const response = await Axios.delete(url, comment,
                {
                    headers: { 'Authorization': 'abimbola120@yahoo.com' }
                })
            return dispatch(fetchCommentForSinglePostSuccess(response.data))
        }
        catch (err) {
            console.log(err)
        }
    };
};



export const updateDetailsOnComment = (comment) => {
    const url = apiUrl`/${'/comments/:id'}`
    return async (dispatch) => {
        try {
            const response = await Axios.put(url, comment,
                {
                    headers: { 'Authorization': 'abimbola120@yahoo.com' }
                })
            return dispatch(updateDetailsForSinglePostSuccess(response.data))
        }
        catch (err) {
            console.log(err)
        }

    };
};

export const updateVoteOnComment = (comment) => {
    const url = apiUrl
    //`/${'/comments/:id'}`
    return async (dispatch) => {
        try {
            const response = await Axios.put(url, comment,
                {
                    headers: { 'Authorization': 'abimbola120@yahoo.com' }
                })
            return dispatch(updateVoteForSinglePostSuccess(response.data))
        }
        catch (err) {
            console.log(err)
        }
    };
}

export const fetchDetailsForSinglePost = (id) => {
    console.log('hehhe')
    console.log(id)
    const url = 'http://localhost:5001/posts/'+id+'/comments'
    console.log(url)
    return async (dispatch) => {
        try {
            const response = await Axios.get(url,
                {
                    headers: { 'Authorization': 'abimbola120@yahoo.com' }
                })
                console.log(response)
            return dispatch(fetchDetailsForSinglePostSuccess(response.data))
        }
        catch (err) {
            console.log(err)
        }
    }

};


export const createComment = (comment) => {
    return (dispatch) => {
        return Axios.post(apiUrl`/${'comments'}`, comment, {
            headers: {
                'Authorization': 'abimbola120@yahoo.com' 
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

export const fetchCommentSinglePost = (id) => {

    //    http://localhost:5001/posts/8xf0y6ziyjabvozdd253nd/comments

    const url = 'http://localhost:5001/posts/' + id + '/comments'
    // apiUrl`/${'/comments/:id'}`
    return async (dispatch) => {
        try {
            const response = await Axios.put(url,
                {
                    headers: { 'Authorization': 'abimbola120@yahoo.com' }
                })
            return dispatch(updateDetailsForSinglePostSuccess(response.data))
        }
        catch (err) {
            console.log(err)
        }
    }

};
    // return (dispatch) => {
    //     return Axios.get(apiUrl`/${'/posts/:id/comments'}`, {
    //         headers: {
    //             "name": "react"
    //         }
    //     })
    //         .then(response => {
    //             dispatch(fetchCommentForSinglePostSuccess(response.data))
    //         })
    //         .catch(error => {
    //             throw (error);
    //         });
    // };
//};
