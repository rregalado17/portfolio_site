import { people01, litigation_manager, local_scout, people02, people03, resume, email, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, github, blog  } from "../assets";

export const navLinks = [
  {
    id: "welcome",
    title: "Welcome",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "techstack",
    title: "Techstack",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


export const projDescription = [
  {
    id: "description",
    content: "These are just a small selection of the projects I've built or worked on. To browse the full list of projects and the various technologies I have used, please check out my github at https://github.com/rregalado17.",
    name: "Litigation Manager",
    youtube: "https://youtu.be/ZhcnHXwgOPE",
    github: "https://github.com/rregalado17/litigation-manager",
    img: litigation_manager,
  },
]

export const projects = [
  {
    id: "project-1",
    content:"Rails MVC web application focused on budget-friendly vacation planning. Users can create an account and browse vacation packages within their desired price range. Implemented user authentication and validation standards for secure sign-up process. Incorporates associations for browsing, reserving, paying, and commenting on trips, with real-time account balance updates.",
    name: "Local Scout",
    youtube: "https://youtu.be/4gfXUzA6p60",
    github: "https://github.com/rregalado17/local-scout-master",
    img: local_scout,
  },
  {
    id: "project-2",
    content: "Built with Rails MVC framework, allowing users to create accounts, comment on cafes, and create new cafes for review. Seamless integration of Google Maps API: Location-related features integrated into the app. Special privileges for administrators: CRUD operations exclusive to admins, enforced through validations and helpers. Enhanced UI and data storage: Customized Bootstrap styles for improved UI, ActiveStorage with AWS S3 for image storage, and Postgres database for user information.",
    name: "Remote Cafe",
    youtube: "https://youtu.be/ZhcnHXwgOPE",
    github: "https://github.com/rregalado17/remote_cafe_app",
    img: people02,
  },
  {
    id: "project-3",
    content:
      "Single-page web application combining Rails backend and React frontend. Efficient lawyer and litigation profile building: Users can create profiles specific to lawyers or matters for internal tracking. Redux for state management: Asynchronous state management using Redux within React components. Object-Oriented Programming and separation of concerns: Development approach focused on OOP principles, clarity, and performance. Iteration methods and reducers utilized for efficient data retrieval, management, display, and sorting.",
    name: "Litigation Manager",
    youtube: "https://youtu.be/ZhcnHXwgOPE",
    github: "https://github.com/rregalado17/litigation-manager",
    img: litigation_manager,
  },
  {
    id: "project-4",
    content:
      "Single-page React website utilizing Tailwind CSS. Functional React components, reusability, and responsive design.  Fetches data from Github and Medium APIs to display work on top of soft and pleasant gradients added throughout the site. Website outlines my bio, projects, blogs, contact, and coding stats and deployed on Hostinger.",
    name: "Portfolio Site",
    youtube: null,
    github: "https://github.com/rregalado17/portfolio_site",
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
        id: "contact-1",
        icon: email,
        name: "E-mail",
        link: "https://www.hoobank.com/explore/",
      },
      { 
        id: "contact-2",
        icon: linkedin,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/rregalado91/",
      },
      {
        id: "contact-3",
        icon: resume,        
        name: "Resume", 
        link: "https://www.hoobank.com/explore/",
      },
    ],
  },
  {
    title: "Experience",
    links: [
      {
        id: "contact-4",
        icon: github,
        name: "GitHub",
        link: "https://github.com/rregalado17",
      },
      {
        id: "contact-5",
        icon: blog,
        name: "Medium",
        link: "https://medium.com/@rregalado17",
      },
    ],
  },
];
