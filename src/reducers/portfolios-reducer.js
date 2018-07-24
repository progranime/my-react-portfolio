import  { GET_ALL_PORTFOLIOS } from '../actions/portfolios-action';

const initialState = {
    portfolios: [
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
    ]
}

const portfoliosReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_ALL_PORTFOLIOS: 
            return state.portfolios
        default: 
            return state.portfolios
    }
}


export default portfoliosReducer;