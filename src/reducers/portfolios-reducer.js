import  { GET_ALL_PORTFOLIOS } from '../actions/portfolios-action';

const initialState = {
    portfolios: [
        {
            id: '1',
            title: 'Superants Inc.',
            thumbnail: 'superants/homepage.jpg',
            description: 'Created informational websites to know what company offers.',
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
            description: `Mobile App that alerts the user if there is a crime near
            to it and giving the shortest path away from the crime`,
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
            description: 'Mobile App for the police officer to report the crime where it take place',
            images: [
                'policeGeoscan/1.png', 'policeGeoscan/2.png', 'policeGeoscan/3.png',
                'policeGeoscan/4.png', 'policeGeoscan/5.png', 'policeGeoscan/6.png',
                'policeGeoscan/7.png', 'policeGeoscan/8.png', 'policeGeoscan/9.png',
                'policeGeoscan/10.png', 'policeGeoscan/11.png', 'policeGeoscan/12.png',
                'policeGeoscan/13.png', 'policeGeoscan/14.png', 'policeGeoscan/15.png',
                'policeGeoscan/16.png'
            ]
        },
        {
            id: '4',
            title: 'Pledges',
            thumbnail: 'pledges/6.jpg',
            description: `Web app that creates Job Description of the company's employee to avoid manual creation using MS Word`,
            images: [
                'pledges/1.jpg', 'pledges/2.jpg', 'pledges/3.jpg',
                'pledges/4.jpg', 'pledges/5.jpg', 'pledges/7.jpg',
                'pledges/8.jpg', 'pledges/9.jpg', 'pledges/6.jpg'
            ]
        },
        {
            id: '5',
            title: 'Vision',
            thumbnail: 'vision/5.jpg',
            description: `Web app that creates vision of the job description`,
            images: [
                'vision/1.jpg', 'vision/2.jpg', 'vision/3.jpg',
                'vision/4.jpg', 'vision/5.jpg'
            ]
        },
        {
            id: '6',
            title: 'Avatar Maker',
            thumbnail: 'avatarmaker/desktop/1.jpg',
            description: `Web app the creates an avatar based on how you customized it`,
            images: [
                'avatarmaker/desktop/1.jpg', 'avatarmaker/desktop/2.jpg', 'avatarmaker/desktop/3.jpg',
                'avatarmaker/desktop/4.jpg', 'avatarmaker/desktop/5.jpg', 'avatarmaker/desktop/6.jpg',
                'avatarmaker/desktop/7.jpg', 'avatarmaker/desktop/8.jpg', 'avatarmaker/desktop/9.jpg',
                'avatarmaker/desktop/10.jpg', 'avatarmaker/desktop/11.jpg', 'avatarmaker/desktop/12.jpg',
                'avatarmaker/desktop/13.jpg', 'avatarmaker/desktop/14.jpg', 'avatarmaker/desktop/15.jpg',
                'avatarmaker/desktop/16.jpg', 'avatarmaker/desktop/17.jpg', 'avatarmaker/mobile/1.jpg',
                'avatarmaker/mobile/2.jpg', 'avatarmaker/mobile/3.jpg', 'avatarmaker/mobile/4.jpg',
                'avatarmaker/mobile/5.jpg', 'avatarmaker/mobile/6.jpg', 'avatarmaker/mobile/7.jpg',
                'avatarmaker/mobile/8.jpg', 'avatarmaker/mobile/9.jpg', 'avatarmaker/mobile/10.jpg',
                'avatarmaker/mobile/11.jpg'
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