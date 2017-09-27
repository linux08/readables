import * as actionTypes from './actiontypes';
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
    return async (dispatch) => {
        try {
            const response = await Axios.get('http://localhost:5001/categories', {
                headers: { "Access-Control-Allow-Origin": "*", 'Authorization': 'whatever-you-want' }
            })
            return dispatch(fetchCategorySuccess(response.data))
        }
        catch (err) {
            console.log(err)
        }
        
    };
};

