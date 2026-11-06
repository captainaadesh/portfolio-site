import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Database,
  Github,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="min-h-screen pt-40 px-6
        bg-white dark:bg-[#101010] text-center">

        <h1 className="text-4xl font-semibold">
          Project not found.
        </h1>

        <Link to="/projects"
          className="inline-block mt-8 text-blue-500">
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24
      bg-white dark:bg-[#101010]
      text-[#171717] dark:text-white
      transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* BACK BUTTON */}

        <Link
          to="/projects"
          className="inline-flex items-center gap-2
            text-sm text-gray-500 hover:text-blue-500 transition mb-16"
        >
          <ArrowLeft size={17} />
          Back to projects
        </Link>

        {/* PROJECT INTRO */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >

          <p className="text-blue-500 text-sm mb-8">
            {project.category} / {project.number}
          </p>

          <h1 className="text-5xl md:text-8xl
            font-semibold tracking-tighter leading-tight">
            {project.title}
          </h1>

          <p className="mt-8 text-xl md:text-2xl
            text-gray-500 dark:text-gray-400 max-w-3xl">
            {project.subtitle}
          </p>

          <p className="mt-8 text-base md:text-lg
            text-gray-500 dark:text-gray-400 max-w-3xl leading-relaxed">
            {project.description}
          </p>

        </motion.section>

        {/* PROJECT STATUS */}

        <div className="mt-16 py-8 border-y
          border-gray-200 dark:border-white/10
          grid grid-cols-2 md:grid-cols-3 gap-8">

          <div>
            <p className="text-xs text-gray-400 mb-3">
              CATEGORY
            </p>
            <p className="font-medium text-sm">
              {project.category}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-3">
              STATUS
            </p>
            <p className="font-medium text-sm">
              {project.status}
            </p>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className="text-xs text-gray-400 mb-3">
              TECHNOLOGIES
            </p>
            <p className="font-medium text-sm">
              {project.technologies.length} technologies
            </p>
          </div>

        </div>

        {/* OVERVIEW */}

        <section className="grid md:grid-cols-2 gap-12 py-24">

          <div>
            <p className="text-blue-500 text-sm mb-5">
              01 / THE CHALLENGE
            </p>

            <h2 className="text-3xl md:text-5xl
              font-semibold tracking-tighter">
              The problem.
            </h2>
          </div>

          <p className="text-lg text-gray-500
            dark:text-gray-400 leading-relaxed">
            {project.problem}
          </p>

        </section>

        <section className="grid md:grid-cols-2 gap-12
          py-16 border-t border-gray-200 dark:border-white/10">

          <div>
            <p className="text-blue-500 text-sm mb-5">
              02 / THE APPROACH
            </p>

            <h2 className="text-3xl md:text-5xl
              font-semibold tracking-tighter">
              The solution.
            </h2>
          </div>

          <p className="text-lg text-gray-500
            dark:text-gray-400 leading-relaxed">
            {project.solution}
          </p>

        </section>

        {/* ARCHITECTURE */}

        <section className="py-24">

          <div className="mb-12">
            <p className="text-blue-500 text-sm mb-5">
              03 / SYSTEM DESIGN
            </p>

            <h2 className="text-3xl md:text-5xl
              font-semibold tracking-tighter">
              Architecture.
            </h2>

            <p className="mt-5 text-gray-500
              dark:text-gray-400">
              High-level representation of the project workflow.
            </p>
          </div>

          <div className="rounded-3xl p-6 md:p-12
            bg-[#F5F5F5] dark:bg-[#1B1B1B]">

            <div className="flex flex-col md:flex-row
              items-center justify-between gap-4">

              {project.architecture.map((step, index) => (
                <div key={step} className="flex flex-col
                  md:flex-row items-center gap-4 flex-1">

                  <div className="w-full min-h-28
                    rounded-2xl bg-white dark:bg-[#292929]
                    p-5 flex flex-col items-center
                    justify-center text-center">

                    <Database className="text-blue-500 mb-3" size={23} />

                    <p className="text-sm font-medium">
                      {step}
                    </p>

                  </div>

                  {index !== project.architecture.length - 1 && (
                    <ArrowUpRight
                      className="rotate-90 md:rotate-0
                        text-gray-400 shrink-0"
                    />
                  )}

                </div>
              ))}

            </div>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Conceptual workflow. The final architecture will reflect
            the actual implementation.
          </p>

        </section>

        {/* IMPLEMENTATION */}

        <section className="py-20 border-t
          border-gray-200 dark:border-white/10">

          <p className="text-blue-500 text-sm mb-5">
            04 / IMPLEMENTATION
          </p>

          <h2 className="text-3xl md:text-5xl
            font-semibold tracking-tighter mb-12">
            Key highlights.
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {project.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-7 rounded-2xl
                  bg-[#F5F5F5] dark:bg-[#1B1B1B]"
              >

                <p className="text-sm text-blue-500 mb-5">
                  0{index + 1}
                </p>

                <p className="text-lg font-medium">
                  {highlight}
                </p>

              </motion.div>
            ))}

          </div>

        </section>

        {/* TECHNOLOGY STACK */}

        <section className="py-20 border-t
          border-gray-200 dark:border-white/10">

          <p className="text-blue-500 text-sm mb-5">
            05 / TECHNOLOGY
          </p>

          <h2 className="text-3xl md:text-5xl
            font-semibold tracking-tighter mb-10">
            Built with.
          </h2>

          <div className="flex flex-wrap gap-3">

            {project.technologies.map((tech) => (
              <span key={tech}
                className="px-5 py-3 rounded-full
                  bg-[#F5F5F5] dark:bg-[#1B1B1B]
                  text-sm font-medium">
                {tech}
              </span>
            ))}

          </div>

        </section>

        {/* GITHUB */}

        <section className="mt-16 p-10 md:p-16
          rounded-3xl bg-[#F5F5F5] dark:bg-[#1B1B1B]">

          <Github size={32} className="mb-8" />

          <h2 className="text-3xl md:text-5xl
            font-semibold tracking-tighter">
            Explore the code.
          </h2>

          <p className="mt-5 text-gray-500
            dark:text-gray-400">
            Explore the implementation and technical documentation.
          </p>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3
                px-7 py-4 rounded-full bg-black text-white
                dark:bg-white dark:text-black text-sm"
            >
              View on GitHub
              <ArrowUpRight size={17} />
            </a>
          ) : (
            <p className="mt-8 text-sm text-gray-400">
              Repository link will be added after implementation.
            </p>
          )}

        </section>

      </div>
    </main>
  );
}