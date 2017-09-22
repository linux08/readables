import React from 'react';
import { render } from 'react-dom'
import './index.css';
import Root from './router/Root.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './store/configureStore'


const store = configureStore();
// store.dispatch(fetchPosts)
render(
    <Router>
        <Root store={store} />
    </Router>,
    document.getElementById('root')
)
registerServiceWorker();




