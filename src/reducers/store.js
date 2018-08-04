import { combineReducers, createStore } from 'redux'
import portfoliosReducer from './portfolios-reducer'
import detailsReducer from './details-reducer'

const store = createStore(
    combineReducers({
        portfolios: portfoliosReducer,
        details: detailsReducer
    })
);

export default store;