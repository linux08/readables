import * as actionTypes from './actiontypes';
import axios from 'axios'

const apiUrl = 'http://localhost/5001';


export const fetchCategorySuccess = (category) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        category
    }
};

export const fetchCategoryOfAPostSuccess = (category) => {
    return {
        type: actionTypes.FETCH_CATEGORY_OF_A_POST_SUCCESS,
        category
    }
};


export const fetchCategoryOfAPost = () => {
    return (dispatch) => {
        return Axios.get(apiUrl`/${':category/posts'},`, {
            headers: {
                "name": "react"
            }
        })
            .then(response => {
                dispatch(fetchCategorySuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const fetchCategory = () => {
    return (dispatch) => {
        return Axios.get(apiUrl`/${categories},`, {
            headers: {
                "name": "react"
            }
        })
            .then(response => {
                dispatch(fetchCategorySuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
