import { combineReducers, createStore } from 'redux';
import portfoliosReducer from './portfolios-reducer';

const store = createStore(
    combineReducers({
        portfolios: portfoliosReducer
    })
);

export default store;