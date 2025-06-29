import { FaExternalLinkAlt, FaCode} from "react-icons/fa";
import styles from "../project/Project.module.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Manager UI",
    description: "Browser extension manager UI project shows practice working with dynamic data, filtering data, color theming, building a responsive grid, and more!.",
    image: "https://raw.githubusercontent.com/Tida007/manager-ui/refs/heads/main/public/design/desktop-design-dark.jpg", 
    link: "https://www.frontendmentor.io/solutions/extension-manager-ui-Gt4JqXTZq1",
    comingSoon: false,
    live: true,
    web: true,
    tech: ["JavaScript", "React", "Tailwind CSS", "Vite", "Node.js"],
    features: ["Responsive Design", "Dark Mode", "Category Filtering", "Search Functionality"],
    tag: "Front-end",
    liveDemo: "https://www.frontendmentor.io/solutions/extension-manager-ui-Gt4JqXTZq1",
    code: "https://github.com/Tida007/manager-ui"
  },
  {
    title: "Clip-board",
    description: "A landing page for a clipboard management tool, designed to showcase its features and benefits.",
    image: "https://raw.githubusercontent.com/Tida007/clipboard-page/refs/heads/main/design/desktop-preview.jpg",
    link: "https://www.frontendmentor.io/solutions/clipboard-landing-page--WxQ2kpTqw",
    comingSoon: false,
    live: true,
    web: true,
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Responsive Design", "Interactive Elements", "Cross-Browser Compatibility"],
    tag: "Landing Page",
    liveDemo: "https://www.frontendmentor.io/solutions/clipboard-landing-page--WxQ2kpTqw",
    code: "https:/github.com/Tida007/clipboard-page"
  },
  {
    title: "News-Letter Sign-Up",
    description: "A simple and elegant newsletter sign-up form that captures user emails with basic form structure, validation and submission.",
    image: "https://raw.githubusercontent.com/Tida007/newsletter-signup/refs/heads/main/assets/images/illustration-sign-up-desktop.svg",
    link: "#",
    comingSoon: false,
    live: true,
    web: true,
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Responsive Design", "Form Validation", "Email Capture"],
    liveDemo: "https://www.frontendmentor.io/solutions/newsletter-sign-up-PAr7IkNiR0",
    code: "https://github.com/Tida007/newsletter-signup",
    tag: "Newsletter"
  },
  // Add more projects as needed
];

function ProjectGrid ()  {
  return (
          <div className={styles.projectGrid}>
      {projects.map((project, idx) => (
          <motion.div 
          className={styles.projectCard} 
          key={idx}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300}}
          >
          <div className={styles.projectImageWrapper}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            {project.live && <span className={`${styles.badge}`}>Live</span>}
            {project.web && <span className={styles.badge} style={{top: "2.5rem"}}>Web</span>}
          </div>
          <div className={styles.projectContent}>
            <div className={styles.projectTitle}>{project.title}</div>
            <div className={styles.projectDesc}>{project.description}</div>
            <div className={styles.techStack}>
              {project.tech.map((tech, i) => (
                  <span className={styles.techTag} key={i}>{tech}</span>
                ))}
            </div>
            <ul className={styles.featuresList}>
              {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
            </ul>
            <div className={styles.projectActions}>
              <a href={project.liveDemo} className={styles.actionBtn} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href={project.code} className={`${styles.actionBtn} ${styles.secondary}`} target="_blank" rel="noopener noreferrer">
                <FaCode /> Code
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
};

export default ProjectGrid;