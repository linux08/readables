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


export const fetchSinglePosts = (id) => {

    return function (dispatch) {
        return API.fetchDetailsForSinglePost(id)
            .then((res) => {
                console.log(res)
                dispatch(fetchSinglePostSuccess(res.data, id))
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




// export const deleteSinglePost = (post) => {
//     return (dispatch) => {
//         return Axios.delete(apiUrl, post, {
//             headers: {
//                 'Authorization': 'abimbola120@yahoo.com'
//             }
//         })
//             .then(response => {
//                 dispatch(deletePostSucces(response.data))
//             })
//             .catch(error => {
//                 throw (error);
//             });
//     };
// };

// export const updateSinglePost = (post) => {
//     return (dispatch) => {
//         return Axios.put(apiUrl, post, {
//             headers: {
//                 'Authorization': 'abimbola120@yahoo.com'
//             }
//         })
//             .then(response => {
//                 dispatch(updateSinglePostSuccess(response.data))
//             })
//             .catch(error => {
//                 throw (error);
//             });
//     };
// };





// export const createPost = (post) => {
//     return (dispatch) => {
//         return Axios.post(apiUrl, post, {
//             headers: {
//                 'Authorization': 'abimbola120@yahoo.com'
//             }
//         })
//             .then(response => {
//                 dispatch(createPostSuccess(response.data))
//             })
//             .catch(error => {
//                 throw (error);
//             });
//     };
// };

// export const fetchPosts = () => {
//     return (dispatch) => {
//         return Axios.get(apiUrl`/${posts}`, {
//             headers: {
//                 'Authorization': 'abimbola120@yahoo.com'
//             }
//         })
//             .then(response => {
//                 dispatch(fetchPostSuccess(response.data))
//             })
//             .catch(error => {
//                 throw (error);
//             });
//     };
// };
