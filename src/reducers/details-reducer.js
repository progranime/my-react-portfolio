import { GET_OBJECTIVES } from '../actions/details-action'

const initialState = {
    objectives: `Experienced Web Developer seeking opportunity to bring knowledge
    of programming. And a self-motivated IT professional with huge
    knowledge and proficiency in HTML, CSS, JavaScript, PHP and
    mobile responsive web development, as well as strong skills and
    ability in writing clean and efficient code.`,
    skills: [
        'HTML/HTML5',
        'CSS/CSS3 (LESS,SCSS), Mobile First Design, BEM naming convention',
        'Javascript (Modular Pattern Design),jQuery, AJAX, Reactjs',
        'Handlebar Template',
        'PHP, MySQL',
        'MVC Framework CodeIgniter',
        'WordPress',
        'Java, Hybris'
    ],
    keySkills: [
        {   
            label: 'HTML',
            name: 'HTML/HTML5',
            rating: 90
        },
        {   
            label: 'CSS',
            name: 'CSS/CSS3',
            rating: 95
        },
        {   
            label: 'JS',
            name: 'Javascript',
            rating: 95
        },
        {   
            label: 'JS',
            name: 'jQuery',
            rating: 90
        },
        {   
            label: 'JS',
            name: 'AJAX',
            rating: 85
        },
        {   
            label: 'PHP',
            name: 'PHP',
            rating: 90
        }
    ],
    tools: [
        'Tortoise SVN, Git',
        'JS Task Runner (Gulp, Grunt)',
        'NPM, NVM',
        'JIRA',
        'FileZilla',
        'Adobe Photoshop',
        'Eclipse',
        'Visual Studio Code, Sublime Text',
        'HeidiSQL, SQLYog'
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
            designation: 'Front & Back End Developer',
            responsibilities: [
                'Automating the creation of the avatar.',
                'Creating Avatar based on gender, position you want.',
                'Customizing avatar you\'ve chosen from top to bottom of body parts.',
                'Storing of avatar you\'ve created.',
                'Searching Functionality for the other user to see your created avatar.'
            ]
        },
        {
            title: 'Job Description / Pledge',
            designation: 'Front & Back End Developer',
            responsibilities: [
                'Automating job description of the company’s employee.',
                'CRUD (Create, Read, Update, Delete) functionality',
                'CRUD functionality will depends on its user role.',
                'Converting the job description to PDF file.',
                'Exporting of data to CSV file.',
                'Tracking user action to the application.'
            ]
        },
        {
            title: 'Tannoy, TC Electronic, TC Helicon, Lab Gruppen, Behringer, Midas Website',
            designation: 'Front End Developer',
            responsibilities: [
                'Supporting current and old website.',
                'Improved coding structure using Modular Pattern Design.',
                'CRUD functionality will depends on its user role.',
                'Handling data request to updates the downloads, software and documents of the product.',
                'Creating new prototype of the current website for better experience for the user'
            ]
        },
        {
            title: 'Superants Inc. Website',
            designation: 'Front End Developer',
            responsibilities: [
                'Created informational websites to know what company offers.',
                'Used Google Maps API.',
                'Created contact form to know users concerns'
            ]
        },
        {
            title: 'GeoSCAN',
            designation: 'Mobile Developer',
            responsibilities: [
                'Programmer and concept developer of this application.',
                'Acquired data from the Police station of the target location of this app.',
                'Utilized the Google Maps API to provide the functionality needed by the application.'
            ]
        }
    ],
    experiences: [
        {
            company: 'MUSIC Tribe',
            designation: 'Web Specialist',
            tenure: 'Aug 2017 - Present',
            responsibilities: [
                'Responsible for creating, improving and developing websites using best practices in coding',
                'Provided support to current websites to enhance and clean up code for better performance.',
                'Handling Data which focuses in downloads, software and documents of the website requested by stakeholders.',
                'Created Automation Project to avoid repetitive task of the company',
                'Following Mobile First Design and Modular coding to have better structure of coding.'
            ]
        },
        {
            company: 'Gee Pacific Services Inc.',
            designation: 'Web Developer',
            tenure: 'June 2016 - July 2017',
            responsibilities: [
                'Ensures and maintained websites are properly working on a daily basis.',
                'Creating responsive websites for better usage in mobile devices.',
                'Utilize Chinese CMS software in creating websites.'
            ]
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