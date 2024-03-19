/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mrityunjay Jha",
  title: "Hi all, I'm Mrityunjay",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing & building scalable Web applications with ReactJS powered by .NET Core Backend and having research-based experience in AI/ML."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kDjYs8fjeyLQzstrF9oGjow_myskYJrw/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mrityu-jha",
  linkedin: "https://www.linkedin.com/in/mrityu/",
  gmail: "mrityu.jha@gmail.com",
  medium: "https://medium.com/@mrityu.jha",
  stackoverflow: "https://stackoverflow.com/users/10797659/mrityu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Creating highly responsive UIs backed by scalable and robust backend services.",
  skills: [
    emoji(
      "⚡ Incorporating AI in your business use-case."
    ),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Designing and developing highly scalable backend services."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "asp.net core",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ai/ml programming",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute of Technology, Rourkela",
      logo: require("./assets/images/nitrkl.jpg"),
      subHeader: "B.Tech, Computer Science and Engineering",
      duration: "July 2018 - June 2022",
      desc: "",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "AI/ML Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SDE - I",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "July 2022 – Present",
      desc: "Creating scalable Web Apps on the Microsoft Azure Cloud Platform for powering Microsoft Volume Licensing Deals.",
    },
    {
      role: "Data Science Intern",
      company: "MPL Gaming",
      companylogo: require("./assets/images/mpllogo.png"),
      date: "Oct 2022 – Jun 2022",
      desc: "Created an ML based big data system for optimizing marketing spends for a given budget and maximizing the ROI."
    },
    {
      role: "Software Engineer Intern",
      company: "DBS Bank",
      companylogo: require("./assets/images/dbslogo.png"),
      date: "May 2022 – July 2022",
      desc: "Developed a full fledged utility web app that empowered API developers to effortlessly transform their business objects across multiple backend frameworks."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "JEE Mains AIR - 2047",
      subtitle:
        "Ranked 2047 among 12 Lac+ students in JEE Mains 2018",
      image: require("./assets/images/jeeMains.png"),
      imageAlt: "JEE Main Logo",
      footerLink: [
      ]
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle:
        "Microsoft Certified Azure Fundamentals course for learning azure cloud concepts and its architecture.",
      image: require("./assets/images/azure.png"),
      imageAlt: "Microsoft Learn Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://learn.microsoft.com/en-us/users/mrityunjayjha-3304/credentials/5c3887193cb93234?ref=https%3A%2F%2Fwww.linkedin.com%2F"
        }
      ]
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "Acquired certification for Deep Learning Specialization from Coursera.",
      image: require("./assets/images/courseraLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/DF8BFX3E432U"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publications",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=z3rr_lIAAAAJ&citation_for_view=z3rr_lIAAAAJ:d1gkVwhDpl0C",
      title: "A vision-based litter detection and classification using SSD MobileNetv2",
      description:
        "The research addresses the increasing challenge of municipal solid waste by proposing an autonomous cleaning system using unmanned surface vehicles and a high-accuracy object detection system based on deep learning algorithms. The study focuses on litter localization and detection, introducing a detection and classification module for five waste objects using a dataset collected from various environmental conditions."
    },
    {
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=z3rr_lIAAAAJ&citation_for_view=z3rr_lIAAAAJ:u-x6o8ySG0sC",
      title: "Motion recognition using DCNN for Kinect-based NAO teleoperation",
      description:
        "A proposed framework enables a Kinect-based NAO robot to recognize and mimic human motions, addressing challenges in dynamic balancing through an adaptive balancing technique (ABTN) that utilizes forward kinematics and weighted averages of mass and center of mass (CoM) calculations for stable whole-body imitation."
    },
    {
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=z3rr_lIAAAAJ&citation_for_view=z3rr_lIAAAAJ:u5HHmVD_uO8C",
      title: "Nao robot teleoperation with human motion recognition",
      description:
        "The paper proposes a Kinect-based teleoperation framework for the NAO robot, utilizing Hidden Markov Models (HMM) to imitate human motions in real time. Microsoft Kinect v2.0 captures human motions, and data augmentation methods are introduced to address the challenge of collecting diverse motion data for humanoid robot teleoperation, enabling more user-friendly control."
    },
    {
      url: "https://medium.com/@mrityu.jha/core-bot-vs-2022-starter-project-explained-219189f89bc6",
      title: "Nao robot teleoperation with human motion recognition",
      description:
        "The article compares the features and benefits of Core Bot and the 2022 Starter Project for developers, highlighting their differences in ease of use, customization options, and compatibility with various platforms. It provides insights into selecting the appropriate tool based on project requirements and developer expertise."
    },
    {
      url: "https://medium.com/@mrityu.jha/understanding-the-grad-of-autograd-fc8d266fd6cf",
      title: "Understanding the Error:- A leaf Variable that requires grad is being used in an in-place operation.",
      description:
        "The article explains the concept of automatic differentiation and the workings of the autograd package in PyTorch, emphasizing its importance in deep learning model training. It covers how autograd calculates gradients and facilitates gradient descent optimization for neural networks."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8960590050",
  email_address: "mrityu.jha@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection, bigProjects, blogSection, contactInfo, educationInfo, greeting, illustration, isHireable, openSource, podcastSection, skillsSection, socialMediaLinks,
  splashScreen, talkSection, techStack, twitterDetails, workExperiences
};

