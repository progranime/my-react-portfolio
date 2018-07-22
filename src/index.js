import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/scss/app.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const allReducers = () => ({
    portfoliosReducer: [
        {
            id: 1,
            title: 'Title 1',
            image: '',
            description: 'Desc Desc'
        },
        {
            id: 2,
            title: 'Title 2',
            image: '',
            description: 'Desc Desc 2'
        },
        {
            id: 3,
            title: 'Title 3',
            image: '',
            description: 'Desc Desc 3'
        }
    ],
    user: {
        name: 'Jeremy'
    }
});

const store = createStore(
    allReducers
);

// console.log(store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
