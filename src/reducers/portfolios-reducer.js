import  { GET_ALL_PORTFOLIOS } from '../actions/portfolios-action';

const initialState = {
    portfolios: [
        {
            id: '1',
            title: 'Superants Inc.',
            thumbnail: 'superants/homepage.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur',
            images: [
                'superants/homepage.jpg',
                'superants/about.jpg',
                'superants/contact.jpg',
                'superants/services.jpg'
            ]
        },
        {
            id: '2',
            title: 'GeoSCAN',
            thumbnail: 'geoscan/1.png',
            description: 'Lorem ipsum dolor sit amet consectetur',
            images: [
                'geoscan/1.png', 'geoscan/2.png', 'geoscan/3.png',
                'geoscan/4.png', 'geoscan/5.png', 'geoscan/6.png',
                'geoscan/7.png', 'geoscan/8.png', 'geoscan/9.png',
                'geoscan/10.png', 'geoscan/11.png', 'geoscan/12.png',
                'geoscan/13.png', 'geoscan/14.png', 'geoscan/15.png',
                'geoscan/16.png', 'geoscan/17.png', 'geoscan/18.png',
                'geoscan/19.png', 'geoscan/20.png', 'geoscan/21.png',
                'geoscan/22.png'
            ]
        },
        {
            id: '3',
            title: 'Police GeoSCAN',
            thumbnail: 'policeGeoscan/1.png',
            description: 'Lorem ipsum dolor sit amet consectetur',
            images: [
                'policeGeoscan/1.png', 'policeGeoscan/2.png', 'policeGeoscan/3.png',
                'policeGeoscan/4.png', 'policeGeoscan/5.png', 'policeGeoscan/6.png',
                'policeGeoscan/7.png', 'policeGeoscan/8.png', 'policeGeoscan/9.png',
                'policeGeoscan/10.png', 'policeGeoscan/11.png', 'policeGeoscan/12.png',
                'policeGeoscan/13.png', 'policeGeoscan/14.png', 'policeGeoscan/15.png',
                'policeGeoscan/16.png', 'policeGeoscan/17.png', 'policeGeoscan/18.png',
                'policeGeoscan/19.png', 'policeGeoscan/20.png', 'policeGeoscan/21.png',
                'policeGeoscan/22.png'
            ]
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