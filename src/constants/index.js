import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, github  } from "../assets";

export const navLinks = [
  {
    id: "welcome",
    title: "Welcome",
  },
  {
    id: "bio",
    title: "Bio",
  },
  {
    id: "techstack",
    title: "Techstack",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const projDescription = [
  {
    id: "description",
    content: "These are just a small selection of the projects I've built or worked on. To browse the full list of projects and the various technologies I have used, please check out my github at https://github.com/rregalado17.",
    name: "Litigation Manager",
    youtube: "https://youtu.be/ZhcnHXwgOPE",
    github: "https://github.com/rregalado17/litigation-manager",
    img: people02,
  },
]

export const projects = [
  {
    id: "project-1",
    content:
      "Local Scout is a Rails MVC web application available on GitHub and YouTube. The app focuses on budget-friendly vacation planning, allowing users to create an account and browse vacation packages within their desired price range. The development process involved utilizing the Rails MVC framework, ensuring a robust full stack application. User authentication and validation standards were implemented to secure user credentials and ensure a seamless sign-up process. The application also incorporates various associations, including belongs_to, has_many, and many_to_many relationships. This enables users to browse, reserve, pay, and comment on trips offered by clients through the Destinations platform. As users interact with the app, the remaining account balance is dynamically updated in real-time. In addition, a backend API was built to facilitate communication with the frontend, following the principles of the REST architecture. Overall, Local Scout is a feature-rich web application designed to provide users with an intuitive and budget-conscious vacation planning experience.",
    name: "Local Scout",
    youtube: "https://youtu.be/4gfXUzA6p60",
    github: "https://github.com/rregalado17/local-scout-master",
    img: people01,
  },
  {
    id: "project-2",
    content: "The application is a full stack web app built using the Rails MVC framework, providing users with the ability to create accounts, comment on cafes, and create new cafes for review. Leveraging the Google Maps API, location-related features are seamlessly integrated. Administrators hold special privileges, allowing them to perform Create, Read, Update, and Delete (CRUD) operations that regular users cannot access. These privileges are enforced through validations and helpers. Following the REST architecture and adhering to SOLID principles, the app ensures smooth communication between the frontend and backend. To enhance the user interface, the Bootstrap styles were customized, resulting in a more organized and visually appealing UI, including improved alerts and navigation bars. ActiveStorage, along with AWS S3, is utilized for image storage, while user information is stored in a Postgres database. This combination of technologies and techniques results in a robust and user-friendly web application.",
    name: "Remote Cafe",
    youtube: "https://youtu.be/ZhcnHXwgOPE",
    github: "https://github.com/rregalado17/remote_cafe_app",
    img: people02,
  },
  {
    id: "project-3",
    content:
      "Litigation Manager is a single-page web application that combines a Rails backend with a React frontend. This application, available on GitHub and YouTube, allows users to build lawyer and litigation profiles efficiently. The development process involved creating a Rails API that enables the creation and management of information related to lawyers and their litigation matters. Users can build profiles specific to lawyers or matters for internal tracking purposes. To handle the frontend, Redux was implemented to manage state asynchronously within the React components and their children. Additionally, fetch requests were built using Axios to transmit information seamlessly between the backend and frontend. The development approach followed Object-Oriented Programming (OOP) principles and separation of concerns to enhance clarity and performance. Iteration methods and reducers were also utilized to efficiently retrieve, manage, display, and sort data from objects. The Litigation Manager web app provides a robust platform for users to create and organize lawyer and litigation profiles effectively.",
    name: "Litigation Manager",
    youtube: "https://youtu.be/ZhcnHXwgOPE",
    github: "https://github.com/rregalado17/litigation-manager",
    img: people02,
  },
];

export const welcome = [
  {
    id: "welcome1",
    content: "Hi! Welcome to my portfolio site. My name is Robinson Regalado and I am a KM specialist with a focus on organizing and coding efficient products and services. My technical expertise lies in Ruby on Rails, JavaScript, React, Redux, and GitHub, among others. I have successfully completed several technical projects, including Remote Cafe, Local Scout, and Litigation Manager, showcasing my proficiency in the Rails MVC framework, REST architecture, and SOLID principles. I also have experience in information management systems, database development, and resource optimization. Holding a Full Stack Web Development certification from the Flatiron School and a Bachelor's degree in Political Science, I bring a strong technical skill set and a commitment to delivering high-quality results. Below is a breakdown of my projects and developments so far. If you're interested in working together, just hit the button, and let’s get in touch!"
  },
];



export const footerLinks = [
  {
    title: "Contact",
    links: [
      {
        id: "social-media-1",
        icon: github,
        name: "GitHub",
        link: "https://github.com/rregalado17",
      },
      {
        id: "social-media-2",
        icon: blog,
        name: "Medium",
        link: "https://medium.com/@rregalado17",
      },
      { 
        id: "social-media-3",
        icon: linkedin,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/rregalado91/",
      },
      {
        id: "social-media-4",
        icon: resume,        
        name: "Resume", 
        link: "https://www.hoobank.com/explore/",
      },
      {
        id: "social-media-1",
        icon: email,
        name: "Email",
        link: "https://www.hoobank.com/explore/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: linkedin,
  },
];