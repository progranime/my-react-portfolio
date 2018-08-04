import { GET_OBJECTIVES } from '../actions/details-action'

const initialState = {
    objectives: 'I am seeking employment with a company where I can use my skills to grow and be an asset to the company especially in the field of software development. Willing to learn different programming languages and tools that will enhance and further strengthen my skills.',
    skills: [
        'Proficient in using programming languages such as Java, Android, HTML5, CSS3 (LESS/SASS), JavaScript (jQuery), AJAX, PHP and MySQL.',
        'Following the Mobile First Design and Modular Coding.',
        'Knowledge in Content Management System like WordPress.',
        'Knowledge in using MVC Framework in PHP like CodeIgniter.',
        'Knowledge in using Adobe Photoshop, Eclipse, Android Studio, Windows IIS7 , Git, Tortoise SVN, Task Runner (Grunt, Gulp), NPM, NVM.',
        'Determined and eager to learn anything that can help me to improve and adapt different tools that would help the development of the project.'
    ],
    awards: [
        'Certificate of Recognition for being on the Dean’s List for First Semester, School Year 2013-2014',
        'Certificate of Participation and Awarded 3rd place in Philippine Programming Challenge 2015',
        'Certificate of Recognition as member of the team that won 3rd place in the Philippine Programming Challenge 2015',
        'Certificate of Recognition for being on the Dean’s List for First Semester, School Year 2015-2016',
        'Certificate of Recognition for being on the VPAA’s List for Second Semester, School Year 2015-2016',
        'Certificate of Recognition for winning 3rd place in the Science and Technology Fair 2016 during TIP’s 54th Foundation Anniversary'
    ],
    projects: [
        {
            title: 'AvatarMaker',
            description: 'Lead programmer creates an avatar that can fully customized, using HTML5, CSS3 (Bootstrap, SASS), Javascript (jQuery), AJAX, HandlebarJS (Templating), Gulp (JS Task Runner) and CodeIgniter (PHP Framework).'
        },
        {
            title: 'Job Description / Pledge',
            description: 'Lead programmer creates the job description of the employee of the company, using HTML5, CSS3(Bootstrap, SASS), Javascript (jQuery), AJAX, HandlebarJS (Templating), Gulp (JS Task Runner), and CodeIgniter (PHP Framework).'
        },
        {
            title: 'Superants Inc. Website',
            description: 'Lead Programmer, using HTML5, CSS3, Bootstrap, Javascript, Jquery, PHP and a PHP Framework CodeIgniter.'
        },
        {
            title: 'GeoSCAN',
            description: 'Programmer & Concept Developer, create an android application that gives civilian awareness on the crime happening to his/her surroundings and automatically report it to the police authorities. This application will provide authentic data using GeoSCAN application.'
        }
    ]
}


const detailsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_OBJECTIVES:
            return state.objectives
        default: 
            return state
    }
}

export default detailsReducer