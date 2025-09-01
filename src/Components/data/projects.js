// images
import weatherDesktop from "../../assets/images/Macbook-Air-all-around-weather.png";
import sayyidanisaDesktop from "../../assets/images/Macbook-Air-sayyida-nisa.png";
import kalamealiDesktop from "../../assets/images/Macbook-Air-kalam-e-ali.png";
import innovatershouseDesktop from "../../assets/images/Macbook-Air-innovatershouse.png";
import invoiceDesktop from "../../assets/images/Macbook-Air-invoice.png"
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
      techStack: ["React", "JavaScript", "Bootstrap", "CSS", "HTML"],
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
      techStack: ["React", "JavaScript", "Bootstrap", "CSS", "HTML"],
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
  ];
export { projects };