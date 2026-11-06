import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    title: "Data Engineering Pipeline",
    description: "Building scalable ETL pipelines using Python, PySpark and AWS.",
    tech: "Python · PySpark · AWS",
  },
  {
    number: "02",
    title: "Data Analytics Dashboard",
    description: "Transforming raw business data into actionable insights.",
    tech: "SQL · Power BI · Python",
  },
];

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#101010]
      text-[#171717] dark:text-white transition-colors duration-500">

      {/* HERO SECTION */}

      <section className="min-h-screen flex items-center
        max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20">

        <div className="w-full">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-10
              px-4 py-2 rounded-full border border-gray-200
              dark:border-white/15 text-sm text-gray-500
              dark:text-gray-400">

              <span className="w-2 h-2 rounded-full bg-green-500" />
              Welcome to my portfolio
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl
              font-semibold tracking-tighter leading-[1.05]"
          >
            Hi, I'm <br />
            Aadesh<span className="text-blue-500">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-xl md:text-3xl
              text-gray-500 dark:text-gray-400
              max-w-3xl leading-relaxed"
          >
            A nerdy brat creating magic through code in my own utopian world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Link
              to="/project"
              className="inline-flex items-center gap-3
                bg-black text-white dark:bg-white dark:text-black
                px-7 py-4 rounded-full text-sm font-medium
                hover:scale-105 transition-transform"
            >
              Explore my work
              <ArrowUpRight size={18} />
            </Link>

            <a
              href="mailto:mirajkaraadesh@gmail.com"
              className="inline-flex items-center gap-2
                text-sm font-medium hover:text-blue-500 transition"
            >
              Let's connect
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 flex items-center gap-6"
          >
            <a href="https://github.com/" target="_blank"
              rel="noreferrer" aria-label="GitHub">
              <Github className="text-gray-400 hover:text-blue-500 transition" />
            </a>

            <a href="https://linkedin.com/" target="_blank"
              rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="text-gray-400 hover:text-blue-500 transition" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* SKILLS STRIP */}

      <section className="border-y border-gray-100
        dark:border-white/10 py-8 overflow-hidden">

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 w-max"
        >
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex gap-16 text-gray-400
              dark:text-gray-500 text-sm md:text-base font-medium">
              <span>PYTHON</span>
              <span>SQL</span>
              <span>PYSPARK</span>
              <span>AWS</span>
              <span>DATABRICKS</span>
              <span>AIRFLOW</span>
              <span>POWER BI</span>
              <span>DRUPAL</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SELECTED WORK */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32">

        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-blue-500 text-sm mb-4">WHAT I DO</p>
            <h2 className="text-4xl md:text-6xl
              font-semibold tracking-tighter">
              Selected work.
            </h2>
          </div>

          <Link to="/project"
            className="hidden md:flex items-center gap-2
              text-sm hover:text-blue-500 transition">
            All projects <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group p-8 md:p-12 min-h-80
                rounded-3xl bg-[#F5F5F5] dark:bg-[#1B1B1B]
                transition-colors duration-300"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-sm text-gray-400">
                  {project.number}
                </span>
                <ArrowUpRight className="text-gray-400
                  group-hover:text-blue-500 transition" />
              </div>

              <h3 className="text-2xl md:text-3xl
                font-semibold tracking-tight mb-4">
                {project.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {project.description}
              </p>

              <p className="text-xs text-blue-500">
                {project.tech}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-32">
        <div className="bg-[#F5F5F5] dark:bg-[#1B1B1B]
          rounded-3xl p-10 md:p-20">

          <p className="text-blue-500 text-sm mb-6">
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="text-4xl md:text-7xl
            font-semibold tracking-tighter max-w-3xl">
            Let's create something meaningful.
          </h2>

          <a href="mailto:mirajkaraadesh@gmail.com"
            className="mt-10 inline-flex items-center gap-3
              bg-black text-white dark:bg-white dark:text-black
              px-7 py-4 rounded-full text-sm">
            Get in touch
            <ArrowDownRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}