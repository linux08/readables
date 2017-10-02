import * as actionTypes from './actiontypes';
import * as API from '../utils/API.js'
import Axios from 'axios'





export const fetchCommentForSinglePostSuccess = (comment,id) => {
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

export const deleteCommentSuccess = (comment) => {
    return {
        type: actionTypes.DELETE_COMMENT_SUCCESS,
        comment
    }
};


// data.data.map((d) => API.fetchCommentSinglePost(d.id)
//     .then((res) => {dispatch(fetchDetailsForSinglePostSuccess(res.data))})
// 

export const fetchComment = (id) => {
 
    return function (dispatch) {
        return API.fetchCommentSinglePost(id)
            .then((res) => {
                // console.log('trying to get comment')
                // console.log('it got here')
                // console.log(res)
               dispatch(fetchCommentForSinglePostSuccess(res.data,id))
            }).catch(err => {throw (err)})
    }
}



// export const deleteSingleComment = (comment) => {
//     const url = apiUrl`/${'/comments/:id'}`
//     return async (dispatch) => {
//         try {
//             const response = await Axios.delete(url, comment,
//                 {
//                     headers: { 'Authorization': 'abimbola120@yahoo.com' }
//                 })
//             return dispatch(fetchCommentForSinglePostSuccess(response.data))
//         }
//         catch (err) {
//             console.log(err)
//         }
//     };
// };



// export const updateDetailsOnComment = (comment) => {
//     const url = apiUrl`/${'/comments/:id'}`
//     return async (dispatch) => {
//         try {
//             const response = await Axios.put(url, comment,
//                 {
//                     headers: { 'Authorization': 'abimbola120@yahoo.com' }
//                 })
//             return dispatch(updateDetailsForSinglePostSuccess(response.data))
//         }
//         catch (err) {
//             console.log(err)
//         }

//     };
// };

// export const updateVoteOnComment = (comment) => {
//     const url = apiUrl
//     //`/${'/comments/:id'}`
//     return async (dispatch) => {
//         try {
//             const response = await Axios.put(url, comment,
//                 {
//                     headers: { 'Authorization': 'abimbola120@yahoo.com' }
//                 })
//             return dispatch(updateVoteForSinglePostSuccess(response.data))
//         }
//         catch (err) {
//             console.log(err)
//         }
//     };
// }

// export const fetchDetailsForSinglePost = (id) => {
//     console.log('hehhe')
//     console.log(id)
//     const url = 'http://localhost:5001/posts/'+id+'/comments'
//     console.log(url)
//     return async (dispatch) => {
//         try {
//             const response = await Axios.get(url,
//                 {
//                     headers: { 'Authorization': 'abimbola120@yahoo.com' }
//                 })
//                 console.log(response)
//             return dispatch(fetchDetailsForSinglePostSuccess(response.data))
//         }
//         catch (err) {
//             console.log(err)
//         }
//     }

// };


// export const createComment = (comment) => {
//     return (dispatch) => {
//         return Axios.post(apiUrl`/${'comments'}`, comment, {
//             headers: {
//                 'Authorization': 'abimbola120@yahoo.com' 
//             }
//         })
//             .then(response => {
//                 dispatch(createCommentSuccess(response.data))
//             })
//             .catch(error => {
//                 throw (error);
//             });
//     };
// };

// export const fetchCommentSinglePost = (id) => {

//     //    http://localhost:5001/posts/8xf0y6ziyjabvozdd253nd/comments

//     const url = 'http://localhost:5001/posts/' + id + '/comments'
//     // apiUrl`/${'/comments/:id'}`
//     return async (dispatch) => {
//         try {
//             const response = await Axios.put(url,
//                 {
//                     headers: { 'Authorization': 'abimbola120@yahoo.com' }
//                 })
//             return dispatch(updateDetailsForSinglePostSuccess(response.data))
//         }
//         catch (err) {
//             console.log(err)
//         }
//     }

// };