import mockImage from "../../assets/mock.png";

export interface Project {
  name: string;
  description: string[];
  techStack: string[];
  features: string[];
  image: string;
  link: string;
  caseStudyLink: string;
  githubLink: string;
}

export const projectInfo: Project[] = [
  {
    name: "Jet Quiz App",
    description: [
      "This is a quiz application built using React with TypeScript for the frontend and Supabase for the backend. The app is inspired by the popular website JetPunk and allows users to make and take quizzes on various topics.",
      "You make, take, and save your favorite quizzes in different categories!",
    ],
    techStack: ["HTML", "CSS", "Javascript", "React", "TypeScript", "Supabase"],
    features: [
      "Quiz Taking: Users can select from a variety of quizzes on different topics and test their knowledge.",
      "Score Tracking: The app keeps track of users' scores and displays them at the end of each quiz.",
      "Leader Board: Users can see how their scores compare to others on the leaderboard.",
      "Responsive Design: The app is designed to be responsive and work well on both desktop and mobile devices.",
    ],
    image: mockImage,
    link: "https://jetquizapp.netlify.app/",
    githubLink: "https://github.com/akabhowmick/jet-quiz-app",
    caseStudyLink: "projects/1",
  },
  //! Update
  {
    name: "Print3Dverse",
    description: [
      "This is an e-commerce website built using React, Firebase, PayPal, and Material-UI (MUI).",
      "The website specializes in selling 3D renders of houses and house fronts.",
      "It offers a user-friendly interface for browsing, purchasing, and downloading high-quality 3D renderings.",
    ],
    techStack: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "PayPal integration:",
      "Firebase",
      "Material-UI (MUI)",
    ],
    features: [
      "Quiz Taking: Users can select from a variety of quizzes on different topics and test their knowledge.",
      "Score Tracking: The app keeps track of users' scores and displays them at the end of each quiz.",
      "Leader Board: Users can see how their scores compare to others on the leaderboard.",
      "Responsive Design: The app is designed to be responsive and work well on both desktop and mobile devices.",
    ],
    image: mockImage,
    link: "https://print3dverse.com/",
    githubLink: "https://github.com/akabhowmick/3d-site",
    caseStudyLink: "projects/2",
  },
  //! Update tech stack and features
  {
    name: "TaekwonMaru",
    description: [
      "This is a responsive website for a Taekwondo business. It is built using HTML, CSS, and JavaScript. The website includes information about the business, its classes, instructors, and contact details",
      "Additionally, it features a contact form through which users can directly communicate with the business owners.",
    ],
    techStack: ["HTML", "CSS", "Javascript"],
    features: [
      "Quiz Taking: Users can select from a variety of quizzes on different topics and test their knowledge.",
      "Score Tracking: The app keeps track of users' scores and displays them at the end of each quiz.",
      "Leader Board: Users can see how their scores compare to others on the leaderboard.",
      "Responsive Design: The app is designed to be responsive and work well on both desktop and mobile devices.",
    ],
    image: mockImage,
    link: "https://marutaekwondo.com/",
    githubLink: "https://github.com/akabhowmick/tkd-site",
    caseStudyLink: "projects/3",
  },
  //! Update tech stack
  {
    name: "Queens Finest Prints",
    description: [
      "This is an e-commerce website specializing in 3D custom designs, with a focus on city signs, card stands, card holders, and accessories.",
      "The website is built using React and React-Bootstrap, offering a sleek and intuitive interface for browsing, customizing, and purchasing unique 3D designs.",
      "Secure payment processing is facilitated through PayPal integration.",
    ],
    techStack: ["HTML", "CSS", "Javascript", "React", "React-Bootstrap", "PayPal integration"],
    features: [
      "Browse a diverse collection of 3D custom designs, including city signs, card stands, card holders, and accessories.",
      "Customize designs with options for color, size, and personalization.",
      "Add items to the shopping cart and securely proceed to checkout using PayPal.",
      "User-friendly interface optimized for both desktop and mobile devices.",
      "Integration with React-Bootstrap for responsive design and UI components.",
    ],
    image: mockImage,
    link: "https://queensfinestprints.com/",
    githubLink: "https://github.com/akabhowmick/queens-finest-prints",
    caseStudyLink: "projects/4",
  },
];
