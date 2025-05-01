import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cinthiavalenzuela from "../../assets/projects/cinthiavalenzuela.png";
import dgtaliza from "../../assets/projects/dgtaliza.png";
import vitrialuminiosdelvalle from "../../assets/projects/vitrialuminiosdelvalle.png";
import voyako from "../../assets/projects/voyako.png";
import meanttobe from "../../assets/projects/meanttobe.png";
import playmatch from "../../assets/projects/playmatch.png";
import fifaApp from "../../assets/projects/fifa-app.png";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Voyako",
      description: "Tourism app to discover fantastic places around the world",
      type: "web",
      screenshot: voyako,
      link: "https://www.voyako.com/",
    },
    {
      id: 2,
      title: "Cinthia Valenzuela",
      description: "Online store where you can buy premium quality jeans",
      type: "web",
      screenshot: cinthiavalenzuela,
      link: "https://cinthiavalenzuela.com/",
    },
    {
      id: 3,
      title: "Dgtaliza",
      description:
        "Software development company offering mobile apps, web development and project management",
      type: "web",
      screenshot: dgtaliza,
      link: "https://dgtaliza.com/",
    },
    {
      id: 4,
      title: "Vitrialuminios del Valle",
      description:
        "Find glass products, shower enclosures, glass doors and aluminum solutions",
      type: "web",
      screenshot: vitrialuminiosdelvalle,
      link: "https://vitrialuminios.com/",
    },
    {
      id: 5,
      title: "Meant To Be",
      description:
        "A dating app where you can meet new people and find your soulmate",
      type: "mobile",
      screenshot: meanttobe,
      link: "https://play.google.com/store/apps/details?id=com.meanttobe&pcampaignid=web_share!",
    },
    {
      id: 6,
      title: "Playmatch",
      description:
        "You can play soccer or found players and fields to play with your friends",
      type: "mobile",
      screenshot: playmatch,
      link: "https://github.com/Aprendizvp2/playmatch",
    },
    {
      id: 7,
      title: "Fifa-app",
      description:
        "Search info about players, teams and tournaments of soccer with best stats",
      type: "mobile",
      screenshot: fifaApp,
      link: "https://vitrialuminios.com/",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  return (
    <div id="projects" className="px-4 md:px-12 py-20 w-full">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-red-600 py-4" data-aos="fade-up">
        Projects
      </h1>
      <div className="flex justify-center my-4" data-aos="zoom-in">
        <div className="relative flex bg-[#333333] rounded-full p-1">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-sm z-10 flex items-center gap-1 md:w-[90px] w-[80px] justify-center ${
              activeTab === "all"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("web")}
            className={`px-4 py-2 rounded-full text-sm z-10 flex items-center gap-1 md:w-[90px] w-[80px] justify-center ${
              activeTab === "web"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-4 py-2 rounded-full text-sm z-10 flex items-center gap-1 md:w-[90px] w-[80px] justify-center ${
              activeTab === "mobile"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Mobile
          </button>
          <motion.div
            className={`absolute top-0 bottom-0 left-0 bg-red-600 rounded-full ${
              activeTab === "all"
                ? "w-1/3 left-0"
                : activeTab === "web"
                ? "w-1/3 left-1/3"
                : "w-1/3 left-2/3"
            }`}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              layout
              className="group relative bg-[#262626] rounded-xl overflow-hidden hover:shadow-[0_0_40px_20px_rgba(127,29,29,0.3)]"
            >
              <div className="w-full overflow-hidden relative">
                <motion.img
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-white font-medium text-lg">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    See details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}