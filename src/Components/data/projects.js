// images
import weatherDesktop from "../../assets/images/Macbook-Air-all-around-weather.png";
import sayyidanisaDesktop from "../../assets/images/Macbook-Air-sayyida-nisa.png";
import kalamealiDesktop from "../../assets/images/Macbook-Air-kalam-e-ali.png";
import innovatershouseDesktop from "../../assets/images/Macbook-Air-innovatershouse.png";
import invoiceDesktop from "../../assets/images/Macbook-Air-invoice.png"
import ployGlotDesktop from "../../assets/images/polyGlot-Desktop.png"
import popChoiceDesktop from "../../assets/images/popChoice-Desktop.png"
const projects = [
    {
      id: 1,
      name: "Weather All Around",
      imageDesktop: weatherDesktop,
      description:
        "A user friendly weather application providing current weather and 5 days forecast.",
      liveLink: "https://all-around-weather.netlify.app/",
      githubLink: "https://github.com/shukria-sultani/SheCodes-Final_Project",
      techStack: ["HTML", "CSS", "JavaScript", "API"],
      featured: false,
      status: 'Completed',
    },
    {
      id: 2,
      name: "Sayyida-Nisa",
      imageDesktop: sayyidanisaDesktop,
      description:
        "Sayyida Nisa is a website dedicated to discussing the life and impact of Fatima Zahra (SA) in Islam and the lives of Muslims. It covers her life, teachings, hadiths, and provides useful resources to learn more about Lady Fatima (SA).",
      liveLink: "https://sayyida-nisa.netlify.app/",
      githubLink: "httpss://github.com/shukria-sultani/Sayyida-Nisa",
      techStack: ["React",  "Bootstrap", "CSS"],
      featured: true,
      status: 'Completed',
    },
    {
      id: 3,
      name: "Kalam-e-Ali",
      imageDesktop: kalamealiDesktop,
      description:
        "A user friendly web app for studying the best sayings of Imam Ali (SA) from Nahjul Balagha.",
      liveLink: "https://kalam-e-ali.netlify.app/",
      githubLink: "https://github.com/shukria-sultani/Imam-Ali-Sayings",
      techStack: ["React", "Bootstrap", "CSS"],
      featured: true,
      status: 'In Progress',
    },
    {
      id: 4,
      name: "InnovatersHouse",
      imageDesktop: innovatershouseDesktop,
      description:
        "An intuitive school portal designed to help students manage their profiles, and access resources.",
      liveLink: "https://shukria-sultani.github.io/InnovatersHouse/index.html",
      githubLink: "https://github.com/shukria-sultani/InnovatersHouse",
      techStack: ["HTML", "CSS", "JavaScript"],
      featured: false,
      status: 'In Progress',
    },
    {
      id: 5,
      name: "Client and Invoice Management",
      imageDesktop: invoiceDesktop,
      description:
        "A comprehensive client and invoice management system for businesses and freelancers to track clients, manage invoices, and see the summary in the dashboard.",
      liveLink:
        "https://shukria-sultani.github.io/freelance-invoice-app/index.html",
      githubLink: "https://github.com/shukria-sultani/freelance-invoice-app",
      techStack: ["HTML", "CSS", "JavaScript", "Chart.js"],
      featured: true,
      status: 'Completed',
    },
    {
      id: 6,
      name: "PolyGlot Translation App",
      imageDesktop: ployGlotDesktop,
      description:
        "An AI Powered app for translating text Japanese, Spanish and French languages ",
      liveLink:
        "https://poly-glot-tanslation.netlify.app/",
      githubLink: "https://github.com/shukria-sultani/translation_app",
      techStack: ["React", "CSS","API", "AI"],
      featured: true,
      status: 'Completed',
    },
       {
      id: 7,
      name: "PopChoice Movie Recommender",
      imageDesktop: popChoiceDesktop,
      description:
        "An AI Powered app for suggesting a movie based on favorite movie, mood and tune. Uses the vector emeddings for and vector database (Supabase) for comparing the user input to the avaible movies and uses AI to explain why the movie is suggested",
      liveLink:
        "https://pop-choice.netlify.app/",
      githubLink: "https://github.com/shukria-sultani/PopChoice",
      techStack: ["React", "CSS", "API", "AI",],
      featured: true,
      status: 'Completed',
    },
  ];
export { projects };