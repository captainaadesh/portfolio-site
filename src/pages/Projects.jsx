import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen pt-32 pb-24
      bg-white dark:bg-[#101010]
      text-[#171717] dark:text-white
      transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HERO */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24"
        >
          <p className="text-blue-500 text-sm mb-8">
            SELECTED WORK
          </p>

          <h1 className="text-6xl md:text-9xl
            font-semibold tracking-tighter leading-none">
            Things I've
            <br />
            <span className="text-gray-400">
              been building.
            </span>
          </h1>

          <p className="mt-10 text-xl md:text-2xl
            text-gray-500 dark:text-gray-400
            max-w-2xl leading-relaxed">
            A collection of projects exploring data engineering,
            distributed computing and analytics.
          </p>
        </motion.section>

        {/* PROJECT COUNT */}

        <div className="flex items-center justify-between
          py-6 border-y border-gray-200 dark:border-white/10 mb-12">

          <p className="text-sm text-gray-500">
            SELECTED PROJECTS
          </p>

          <p className="text-sm text-gray-500">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </p>
        </div>

        {/* PROJECT CARDS */}

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ y: -7 }}
              className={`group rounded-3xl overflow-hidden
                bg-[#F5F5F5] dark:bg-[#1B1B1B]
                ${index === 0 ? "md:col-span-2" : ""}`}
            >

              {/* VISUAL HEADER */}

              <div className={`relative p-8 md:p-12
                overflow-hidden bg-gradient-to-br
                from-gray-200 to-gray-100
                dark:from-[#303030] dark:to-[#1B1B1B]
                ${index === 0 ? "min-h-72 md:min-h-96" : "min-h-64"}`}>

                <div className="absolute -right-12 -bottom-24
                  w-72 h-72 rounded-full border
                  border-black/10 dark:border-white/10
                  group-hover:scale-125 transition-transform duration-700" />

                <div className="absolute right-12 bottom-12
                  w-44 h-44 rounded-full border
                  border-black/10 dark:border-white/10
                  group-hover:scale-110 transition-transform duration-700" />

                <div className="relative z-10 flex justify-between">
                  <span className="text-xs tracking-widest
                    text-gray-500 dark:text-gray-400">
                    {project.category}
                  </span>

                  <span className="text-5xl md:text-7xl
                    font-semibold tracking-tighter
                    text-black/10 dark:text-white/10">
                    {project.number}
                  </span>
                </div>

                <div className="absolute bottom-10 left-8 md:left-12
                  text-gray-400 dark:text-gray-500
                  text-sm tracking-widest">
                  {project.technologies.slice(0, 3).join(" / ")}
                </div>
              </div>

              {/* PROJECT DETAILS */}

              <div className="p-8 md:p-10">

                <div className="flex justify-between gap-4">

                  <div>
                    <h2 className="text-2xl md:text-3xl
                      font-semibold tracking-tight">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-gray-500
                      dark:text-gray-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    aria-label={`View ${project.title}`}
                    className="shrink-0 w-12 h-12 rounded-full
                      bg-white dark:bg-[#292929]
                      flex items-center justify-center
                      group-hover:bg-black group-hover:text-white
                      dark:group-hover:bg-white
                      dark:group-hover:text-black
                      transition-colors"
                  >
                    <ArrowUpRight size={21} />
                  </Link>

                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-2 rounded-full
                        bg-white dark:bg-[#292929]
                        text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2
                      text-sm font-medium hover:text-blue-500 transition"
                  >
                    Explore case study
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </main>
  );
}