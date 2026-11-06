import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Music2,
  BookOpen,
  Camera,
  Plane,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@captainaadesh",
    url: "https://github.com/captainaadesh",
    icon: Github,
  },
  {
    name: "LinkedIn",
    handle: "Professional profile",
    url: "https://www.linkedin.com/in/aadesh-mirajkar",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    handle: "Photos & stories",
    url: "https://www.instagram.com/captainaadesh",
    icon: Instagram,
  },
  {
    name: "Facebook",
    handle: "Connect with me",
    url: "https://facebook.com/captainaadesh",
    icon: Facebook,
  },
  {
    name: "Twitter / X",
    handle: "@captainaadesh",
    url: "https://twitter.com/captainaadesh",
    icon: Twitter,
  },
  {
    name: "Spotify",
    handle: "What I'm listening to",
    url: "https://open.spotify.com/user/31jtytdlkkfhijhnt5vmyfplgsf4",
    icon: Music2,
  },
  {
    name: "Goodreads",
    handle: "Books I'm reading",
    url: "https://www.goodreads.com/user/show/80093512-aadesh-mirajkar",
    icon: BookOpen,
  },
  {
    name: "Keybase",
    handle: "Public key",
    url: "https://keybase.io/aadesh",
    icon: ArrowUpRight,
  },
];

export default function About() {
  return (
    <main className="min-h-screen pt-36 pb-24
      bg-white dark:bg-[#101010]
      text-[#171717] dark:text-white
      transition-colors duration-500">

      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* INTRODUCTION */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 text-sm tracking-widest mb-10">
            A LITTLE ABOUT ME
          </p>

          <h1 className="text-5xl md:text-8xl
            font-semibold tracking-tighter leading-tight">
            Hi, <span className="inline-block">👋</span>
          </h1>

          <p className="mt-10 text-xl md:text-2xl
            text-gray-500 dark:text-gray-400 leading-relaxed">
            Thank you for visiting my website.
          </p>

          <div className="mt-8 space-y-7 text-base md:text-lg
            leading-[1.9] text-gray-600 dark:text-gray-400">

            <p>
              I am <strong className="text-black dark:text-white">
                Aadesh Mirajkar
              </strong>. Currently working as a Software Engineering Specialist at{" "}
              <a href="https://www.3ds.com/"
                target="_blank" rel="noreferrer"
                className="text-black dark:text-white underline
                  underline-offset-4 decoration-gray-300
                  hover:text-blue-500 transition">
                Dassault Systèmes
              </a>{" "}
              in Pune. Basically, I am from{" "}
              <a href="https://en.wikipedia.org/wiki/Latur"
                target="_blank" rel="noreferrer"
                className="text-black dark:text-white underline
                  underline-offset-4 decoration-gray-300
                  hover:text-blue-500 transition">
                Latur
              </a>, situated in{" "}
              <a href="https://en.wikipedia.org/wiki/Maharashtra"
                target="_blank" rel="noreferrer"
                className="text-black dark:text-white underline
                  underline-offset-4 decoration-gray-300
                  hover:text-blue-500 transition">
                Maharashtra, India
              </a>.
            </p>

            <p>
              I am enthusiastic about building full-fledged
              applications and working with technologies like
              Python and its frameworks, including Flask and Django.
              I am also interested in Product Management and Blockchain.
            </p>

            <p>
              I am a minimalist at heart who loves keeping things
              simple. I like things I can see or feel. That's one
              of the reasons I love{" "}
              <a href="https://github.com/captainaadesh"
                target="_blank" rel="noreferrer"
                className="text-black dark:text-white underline
                  underline-offset-4 decoration-gray-300
                  hover:text-blue-500 transition">
                writing code
              </a>{" "}
              — because I can see my ideas come to life.
            </p>

            <p>
              Apart from technology, I have a passion for photography.
              I love travelling and{" "}
              <a href="https://www.goodreads.com/user/show/80093512-aadesh-mirajkar"
                target="_blank" rel="noreferrer"
                className="text-black dark:text-white underline
                  underline-offset-4 decoration-gray-300
                  hover:text-blue-500 transition">
                reading books
              </a>.
            </p>

          </div>
        </motion.section>

        {/* FAVOURITE QUOTE */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="my-28 md:my-36 py-12 md:py-16
            border-y border-gray-200 dark:border-white/10"
        >
          <p className="text-blue-500 text-sm tracking-widest mb-10">
            A THOUGHT I BELIEVE IN
          </p>

          <blockquote className="text-3xl md:text-5xl
            font-medium tracking-tight leading-tight">
            "Stone Age. Bronze Age. Iron Age.
            We define entire epochs of humanity
            by the technology they use."
          </blockquote>

          <a
            href="https://en.wikipedia.org/wiki/Reed_Hastings"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-8
              text-sm text-gray-500 hover:text-blue-500 transition"
          >
            — Reed Hastings
            <ArrowUpRight size={15} />
          </a>
        </motion.section>

        {/* BEYOND TECHNOLOGY */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <p className="text-blue-500 text-sm tracking-widest mb-8">
            BEYOND THE SCREEN
          </p>

          <h2 className="text-3xl md:text-5xl
            font-semibold tracking-tighter mb-10">
            Life outside technology.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

            {[
              { icon: Camera, title: "Photography" },
              { icon: Plane, title: "Travelling" },
              { icon: BookOpen, title: "Reading" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl p-8
                    bg-[#F5F5F5] dark:bg-[#1B1B1B]"
                >
                  <Icon size={28}
                    className="text-blue-500 mb-10" />

                  <h3 className="text-xl font-medium">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}

          </div>
        </motion.section>

        {/* CONTACT ME */}

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 border-t
            border-gray-200 dark:border-white/10"
        >
          <p className="text-blue-500 text-sm tracking-widest mb-8">
            CONTACT ME
          </p>

          <h2 className="text-4xl md:text-6xl
            font-semibold tracking-tighter">
            Let's talk.
          </h2>

          <p className="mt-8 text-lg md:text-xl
            text-gray-500 dark:text-gray-400
            max-w-2xl leading-relaxed">
            You can reach me via email for a quick response.
            Do it without thinking twice. I love making
            connections and am always up for a good conversation.
          </p>

          <a
            href="mailto:mirajkaraadesh@gmail.com"
            className="inline-flex items-center gap-3 mt-10
              px-7 py-4 rounded-full
              bg-black text-white dark:bg-white dark:text-black
              text-sm font-medium hover:scale-105 transition-transform"
          >
            <Mail size={18} />
            mirajkaraadesh@gmail.com
            <ArrowUpRight size={17} />
          </a>
        </motion.section>

        {/* SOCIAL PROFILES */}

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-20 border-t
            border-gray-200 dark:border-white/10"
        >
          <p className="text-blue-500 text-sm tracking-widest mb-8">
            STALK ME!
          </p>

          <h2 className="text-4xl md:text-6xl
            font-semibold tracking-tighter mb-6">
            Find me on the internet.
          </h2>

          <p className="text-gray-500 dark:text-gray-400
            text-lg mb-12 max-w-2xl">
            Follow along, explore my work, discover what I'm
            reading or listening to, and let's connect.
          </p>

          <div className="border-t border-gray-200
            dark:border-white/10">

            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group flex items-center
                    justify-between py-6
                    border-b border-gray-200
                    dark:border-white/10"
                >
                  <div className="flex items-center gap-5">

                    <Icon size={21}
                      className="text-gray-400
                        group-hover:text-blue-500 transition" />

                    <div>
                      <h3 className="text-base md:text-lg
                        font-medium group-hover:text-blue-500 transition">
                        {social.name}
                      </h3>

                      <p className="text-xs md:text-sm
                        text-gray-400 mt-1">
                        {social.handle}
                      </p>
                    </div>

                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-gray-400
                      group-hover:text-blue-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1 transition"
                  />
                </motion.a>
              );
            })}

          </div>
        </motion.section>

      </div>
    </main>
  );
}