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

const portfoliosReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'sample': 
            return state
        default: 
            return state
    }
}


export default portfoliosReducer;