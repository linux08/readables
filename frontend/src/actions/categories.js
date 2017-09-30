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


export const fetchPostInCategory = () => {

    return function (dispatch) {
        return API.FetchCategory()
            .then((res) => {
                console.log(res)
                dispatch(fetchCategorySuccess(res.data))
            })
            .then(() => API.fetchPosts())
            .then((data) => {
                console.log(data.data.map((d) => d.id))
                dispatch(fetchPostInCategorySuccess(data.data))
                data.data.map((d) => API.fetchCommentSinglePost(d.id)
                    .then(res => dispatch(fetchDetailsForSinglePostSuccess(res.data))))
                // console.log(res.data)))
            })


            .catch(err => console.log(err))


        // };
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
    console.log('e dey here')
    return function (dispatch) {
        return API.fetchPostInCategory(category)
            .then((res) => {
                console.log(res)
                dispatch(fetchPostInCategorySuccess(res.data))
            }).catch(err => console.log(err))

    }
}



