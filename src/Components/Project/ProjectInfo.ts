import laptopEtsyImage from "../../assets/ProjectImages/laptopEtsyImage.png";
import laptopThreeImage from "../../assets/ProjectImages/laptop3D.png";
// import laptopQuizImage from "../../assets/ProjectImages/laptopJetQuiz.png";
import laptopTkdImage from "../../assets/ProjectImages/laptopTkd.png";
import laptopQFPImage from "../../assets/ProjectImages/laptopQFP.png";
import laptopTempo from "../../assets/ProjectImages/laptopTempo.jpg";

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
    name: "Tempo ABA Website ",
    description: [
      "Welcome to the Tempo ABA website!",
      "This project is a fully responsive website built using React and TypeScript, styled with Tailwind CSS.",
      "It integrates icons from the react-icons library and uses images sourced from Freepik.",
      "The site aims to provide detailed information about ABA therapy services, FAQs, team member bios, and contact details.",
    ],
    techStack: ["HTML", "CSS", "Javascript", "React", "TypeScript", "Tailwind"],
    features: [
      "It boasts a responsive interface, ensuring seamless navigation on both web and mobile devices.",
      "Experience a modern aesthetic with a sleek look and feel that enhances user engagement and satisfaction.",
    ],
    image: laptopTempo,
    link: "https://github.com/akabhowmick/tempo-aba",
    githubLink: "https://tempoaba.com/",
    caseStudyLink: "projects/2",
  },
  {
    name: "Etsy E-commerce Website Template",
    description: [
      "Experience unparalleled e-commerce sophistication with our tailored platform, meticulously crafted to showcase your Etsy business.",
      "Seamlessly integrated with PayPal, it ensures secure payment processing, fostering customer trust.",
      "Its intuitive design invites visitors to explore your curated offerings effortlessly.",
      "Customizable features streamline inventory management, order fulfillment, and customer relations, empowering your business to thrive.",
      "Whether you're a seasoned entrepreneur or embarking on your Etsy journey, our platform stands ready to elevate your online presence and propel your business to new heights of success.",
    ],
    techStack: ["HTML", "CSS", "Javascript", "React", "TypeScript", "Supabase", "MUI"],
    features: [
      "Our platform offers complete customization options, allowing you to tailor every aspect to your unique needs.",
      "It boasts a responsive interface, ensuring seamless navigation on both web and mobile devices.",
      "With a focus on safety and security, our payment interface provides peace of mind for every transaction.",
      "Experience a modern aesthetic with a sleek look and feel that enhances user engagement and satisfaction.",
    ],
    image: laptopEtsyImage,
    link: "https://etsy-e-commerce-template.netlify.app/",
    githubLink: "https://github.com/akabhowmick/etsy-e-commerce-template",
    caseStudyLink: "projects/1",
  },

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
      "You can put things in your cart and securely check out using the paypal integration",
      "Provide the seller your contact information so that they can reach out to you and ship you your products",
      "Customize your products by adding your images after the product has been ordered",
      "Responsive Design: The app is designed to be responsive and work well on both desktop and mobile devices.",
    ],
    image: laptopThreeImage,
    link: "https://print3dverse.com/",
    githubLink: "https://github.com/akabhowmick/3d-site",
    caseStudyLink: "projects/3",
  },
  {
    name: "TaekwonMaru",
    description: [
      "This is a responsive website for a Taekwondo business. It is built using React and Typescript, aiming to be highly accessible and follow the best practices. The website includes information about the business, its classes, instructors, and contact details",
      "Additionally, it features a contact form through which users can directly communicate with the business owners.",
      "This site can also be easily customized to serve as a template for similar small businesses",
    ],
    techStack: ["HTML", "CSS", "Javascript", "React", "TypeScript", "MUI"],
    features: [
      "View the school's programs and understand which might fit your needs the best.",
      "View and learn about the school's staff and masters, and see their credentials",
      "Gain access to web exclusive offers and deals!",
      "Contact the masters directly to learn more about Taekwondo and K-Pop Dance Classes.",
      "Keep up to date with the school's schedule and current events. ",
    ],
    image: laptopTkdImage,
    link: "https://marutaekwondo.com/",
    githubLink: "https://github.com/akabhowmick/TaekwonMaru-React",
    caseStudyLink: "projects/4",
  },
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
    image: laptopQFPImage,
    link: "https://queensfinestprints.com/",
    githubLink: "https://github.com/akabhowmick/queens-finest-prints",
    caseStudyLink: "projects/5",
  },
];
