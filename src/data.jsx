import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assests/assets/project-11.png'; 
import Work2 from './assests/assets/project-2.png';
import Work3 from './assests/assets/project-7.jpeg';
import Work4 from './assests/assets/project-8.jpeg';
import Work5 from './assests/assets/project-9.jpeg';
import Work6 from './assests/assets/project-6.jpeg';
import Work7 from './assests/assets/project-12.jpeg';


import Theme1 from './assests/assets/purple.png';
import Theme2 from './assests/assets/red.png';
import Theme3 from './assests/assets/blueviolet.png';
import Theme4 from './assests/assets/blue.png';
import Theme5 from './assests/assets/goldenrod.png';
import Theme6 from './assests/assets/magenta.png';
import Theme7 from './assests/assets/yellowgreen.png';
import Theme8 from './assests/assets/orange.png';
import Theme9 from './assests/assets/green.png';
import Theme10 from './assests/assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Kunal',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Kulkarni',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'City : ',
    description: 'Pune/Nashik',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+91-7057163601',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'kkulkarni369@gmail.com',
  },

  {
    id: 8,
    title: 'LinkedIn : ',
    description: 'Kunal.Kulkarni',
    link : "https://www.linkedin.com/in/kunal-kulkarni-a127601b2/"
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Hindi, Marathi',
  },
];

export const stats = [
  {
    id: 1,
    no: '2023',
    title: 'Passed out <br /> Fresher',
  },

  {
    id: 2,
    no: '11+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '2+',
    title: 'Internship <br /> Experience',
  },

  {
    id: 4,
    no: '3+',
    title: 'Courses <br /> done',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '02/2023 - PRESENT',
    title: 'Design Intern <span> Finulent Solutions LLP </span>',
    desc: 'Task to design Solar panels with customer requirements and Quality Assurance using AutoCad software',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '07/2022-12/2022',
    title: 'Project Intern <span> Technocraft Engineering Solutions </span>',
    desc: 'Task to Design Metal separator Machine using company specifications and requirements on Solidworks Software',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '08/2022-10/2022',
    title: 'Intern <span> Fluid Controls Pvt. Ltd., Pune</span>',
    desc: 'Task to Design and Draft Mechanical parts in Solidworks Software',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Engineering Degree <span>Vishwakarma Institute of Information Technology, Pune</span>',
    desc: 'Passed out Mechanical degree with CGPA of 9.56 From Savitribai Phule Pune University',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'HSC <span>HPT Arts And RYK Science College, Nashik</span>',
    desc: 'Passed out 12th Science with 83.08% from Maharashtra state board of secondary and higher secondary board',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'SSC <span>Adarsh Madhyamik Vidyalaya, Nashik</span>',
    desc: 'Passed out 10th with 93.40% from Maharashtra state board of secondary and higher secondary board',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Mysql',
    percentage: '70',
  },

  {
    id: 5,
    title: 'Solidworks',
    percentage: '95',
  },

  {
    id: 6,
    title: 'AutoCAD',
    percentage: '85',
  },

  {
    id: 7,
    title: 'NextJs',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '95',
  },
];

export const portfolio = [
 
  {
    id: 3,
    img: Work3,
    title: 'Web App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Cryptoverse App',
      },
      {
        icon: <FiUser />,
        title: 'Skills : ',
        desc: 'Javascript, Rapid API, Millify',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs, React-Redux, AntDesign',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.cryptoverse-app.com',
        link: 'https://cryptoverse-app-6496fe.netlify.app/'
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Clone App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Amazon-Clone App',
      },
      {
        icon: <FiUser />,
        title: 'Skills : ',
        desc: 'Html, Css, Javascript, Rapid API',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs, Firebase, Firebase-hosting',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.amazon-clone.com',
        link: 'https://clone-15f28.web.app/'
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Dashboard App',
    details: [
      {
        title: 'Project : ',
        desc: 'Dashboard App',
      },
      {
        title: 'Skills : ',
        desc: 'Javascript, contextAPI, TailwindCSS',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Syncfusion-ej2',
      },
      {
        title: 'Preview : ',
        desc: 'www.dashboard-app.com',
        link: 'https://dashboard-app-react-a61a49.netlify.app/'
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Clone App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Netflix Clone',
      },
      {
        icon: <FiUser />,
        title: 'Skills : ',
        desc: 'Html, CSS, Javascript',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Vanilla Javascript, Moviesdb-API',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.netflix-clone.com',
        link: 'https://netflix-clone-48df34.netlify.app'
      },
    ],
  },
  {
    id: 1,
    img: Work1,
    title: 'Machine Learning',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'HSS tool Life Prediction',
        
      },
      {
        icon: <FiUser />,
        title: 'Skill : ',
        desc: 'Xgboost Regressor',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Machine Learning',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.Github.com',
        link : 'https://github.com/kunalbro369/HSS-Tool-Life-Prediction-Using-XGBoost-ML-Project'
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Metal Separator Machine',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Metal Separator Machine',
      },
      {
        icon: <FiUser />,
        title: 'Skill : ',
        desc: 'Solidworks',
      },
      {
        icon: <FaCode />,
        title: 'Editor : ',
        desc: 'Blender',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.Github.com',
        link: 'https://github.com/kunalbro369/Metal-Separator-Machine'
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: 'Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Ecommerce Website',
      },
      {
        icon: <FiUser />,
        title: 'Skills : ',
        desc: 'Html, CSS, RWD',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'More Focus on CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.ecommerce.com',
        link: 'https://ecommerce-web-e2b8cf.netlify.app/'
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
