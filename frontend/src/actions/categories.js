import * as actionTypes from './actiontypes';
import Axios from 'axios'


const apiUrl = 'http://localhost/5001';


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



export const fetchCategoryOfAPost = () => {

    return async (dispatch) => {
        try {
            const response =  await Axios.get('http://localhost:5001/posts',
                {
                    headers: { 'Authorization': 'whatever-you-want' }
                })
            console.log('trying asyn await in post')
            console.log(response)
            return  dispatch(fetchCategoryOfAPostSuccess(response.data))
        }
        catch (err) {
            console.log(err)
        }
    };
};


export const fetchCategory = () => {
    console.log('clicked here')
    return async (dispatch) => {
        try {
            const response = await Axios.get('http://localhost:5001/categories', {
                headers: { "Access-Control-Allow-Origin": "*", 'Authorization': 'whatever-you-want' }
            })
            console.log('trying asyn await')
            console.log(response)
            return dispatch(fetchCategorySuccess(response.data))
        }
        catch (err) {
            console.log(err)
        }
        
    };
};

