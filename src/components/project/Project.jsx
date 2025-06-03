import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Manager UI",
    description: "A front-end application connecting property owners with potential renters.",
    image: "https://raw.githubusercontent.com/Tida007/manager-ui/refs/heads/main/public/design/desktop-design-dark.jpg", // Replace with your image
    link: "https://www.frontendmentor.io/solutions/extension-manager-ui-Gt4JqXTZq1",
    comingSoon: false,
    tag: "Front-end",
  },
  {
    title: "Clip-board",
    description: "A landing page for a clipboard management tool, designed to showcase its features and benefits.",
    image: "https://raw.githubusercontent.com/Tida007/clipboard-page/refs/heads/main/design/desktop-preview.jpg",
    link: "https://www.frontendmentor.io/solutions/clipboard-landing-page--WxQ2kpTqw",
    comingSoon: false,
    tag: "Landing Page",
  },
  {
    title: "Mobile App (Coming Soon)",
    description: "A mobile-first project coming soon.",
    image: "https://via.placeholder.com/400x200?text=Coming+Soon",
    link: "#",
    comingSoon: true,
    tag: "Mobile",
  },
  // Add more projects as needed
];

const ProjectGrid = () => (
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
    {projects.map((project, idx) => (
      <div
      key={idx}
      className="bg-zinc-900 rounded-xl overflow-hidden shadow border border-zinc-800 flex flex-col"
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            />
          {project.comingSoon && (
            <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-gray-200 text-lg font-semibold">
              Coming Soon
            </span>
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-gray-100 mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="inline-block bg-blue-800 text-blue-200 text-xs px-2 py-1 rounded">{project.tag}</span>
            {!project.comingSoon && (
              <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-400 hover:underline"
              >
                Live Demo <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectGrid;