// Set up your root reducer here...
import { combineReducers } from 'redux';
import { commentReducer } from './commentReducer'
import  { postReducer } from './postReducer'
import  { categoryReducer } from './categoryReducer'
import { reducer as FormReducer } from  'redux-form'

export default combineReducers({
    comments :commentReducer,
    post: postReducer,
    categorys :categoryReducer,
    form: FormReducer
});


// // Set up your root reducer here...
// import { combineReducers } from 'redux';
// import {booksReducer, bookReducer} from './bookReducers'
// import cart from './cartReducers';

// export default combineReducers({
//   books: booksReducer,
//   book: bookReducer,
//   cart
// });
