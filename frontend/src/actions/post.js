import * as actionTypes from './actiontypes';
import axios from 'axios'

const apiUrl = 'http://localhost/5001';


export const fetchPostSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts
    }
};

export const fetchSinglePostSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_SINGLE_POSTS_SUCCESS,
        posts
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

export const deleteSinglePost = (post) => {
    return (dispatch) => {
        return Axios.delete(apiUrl, post, {
            headers: {
                'Authorization': 'abimbola120@yahoo.com' 
            }
        })
            .then(response => {
                dispatch(deletePostSucces(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const updateSinglePost = (post) => {
    return (dispatch) => {
        return Axios.put(apiUrl, post, {
            headers: {
                'Authorization': 'abimbola120@yahoo.com' 
            }
        })
            .then(response => {
                dispatch(updateSinglePostSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const fetchSinglePosts = () => {
    return (dispatch) => {
        return Axios.get(apiUrl`/${'posts/:id'}`, {
            headers: {
                'Authorization': 'abimbola120@yahoo.com' 
            }
        })
            .then(response => {
                dispatch(fetchSinglePostSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const createPost = (post) => {
    return (dispatch) => {
        return Axios.post(apiUrl, post, {
            headers: {
                'Authorization': 'abimbola120@yahoo.com' 
            }
        })
            .then(response => {
                dispatch(createPostSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchPosts = () => {
    return (dispatch) => {
        return Axios.get(apiUrl`/${posts}`, {
            headers: {
                'Authorization': 'abimbola120@yahoo.com' 
            }
        })
            .then(response => {
                dispatch(fetchPostSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
