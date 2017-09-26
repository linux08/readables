// Set up your root reducer here...
import { combineReducers } from 'redux';
import { commentReducer } from './commentReducer'
import  { postReducer } from './postReducer'
import  { categoryReducer } from './categoryReducer'

export default combineReducers({
    commentReducer,
    postReducer,
    categoryReducer
});
