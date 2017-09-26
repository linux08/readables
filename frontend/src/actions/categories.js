import * as actionTypes from './actiontypes';
import Axios from 'axios'


const apiUrl = 'http://localhost/5001';


export const fetchCategorySuccess = (category) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        category
    }
};

export const fetchCategoryOfAPostSuccess = (data) => {
    console.log('it got here fetchCategoryOfAPostSuccess  ')
    return {
        type: actionTypes.FETCH_CATEGORY_OF_A_POST_SUCCESS,
        data
    }
};

//export const FETCH_CATEGORY_OF_A_POST_SUCCESS= 'FETCH_CATEGORY_OF_A_POST_SUCCESS'



export const fetchCategoryOfAPost = () => {
    console.log('trying to get category of a post')
    const url = 'http://localhost:5001/posts'
    console.log(url)
    return (dispatch) => {
        return Axios.get(url,
            {
                headers: { 'Authorization': 'whatever-you-want' }
            })
            .then((response) => {
                dispatch(fetchCategoryOfAPostSuccess(response.data))
                console.log(response.data)
            })
            .catch(error => {
                console.log('error her')
                console.log(error)
                //throw (error);
            });
    };
};


export const fetchCategory = () => {
    return (dispatch) => {
        return Axios.get(apiUrl`/${'categories'},`, {
            headers: {
                "name": "react"
            }
        })
            .then(response => {
                dispatch(fetchCategorySuccess(response.data))
            })
            .catch(error => {
                console.log(error)
                //throw (error);
            });
    };
};
