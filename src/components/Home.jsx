import React from "react";
import image from "../img/vishal.jpg";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.section
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full min-h-[calc(100vh-56px)] flex items-center justify-center px-5 md:px-16 py-10"
      >
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="text-white">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-2xl md:text-3xl font-serif"
            >
              Hey, I’m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-3 text-5xl md:text-6xl font-serif font-bold text-fuchsia-500 leading-tight"
            >
              Vishal Singh
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-5 text-xl md:text-2xl font-semibold"
            >
              Full Stack Developer | MCA Student
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-base md:text-lg text-white/80 font-mono leading-relaxed"
            >
              I build clean and responsive web applications using React, Node.js and modern UI tools.
              If you'd like to collaborate or have any questions, feel free to reach out — I’d love to connect!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => navigate("/project")}
                className="px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-500 transition font-bold shadow-lg"
              >
                View Projects 🚀
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition font-bold"
              >
                Download Resume 📄
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex gap-6 text-3xl"
            >
              <a
                href="https://x.com/Vishal_rajput_0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaTwitter className="hover:text-blue-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/vishal-singh-a785b7221/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaLinkedin className="hover:text-blue-600" />
              </a>

              <a
                href="https://github.com/Vishalrajputhere"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaGithub className="hover:text-gray-300" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT (Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-2 rounded-2xl bg-purple-500/20 blur-2xl" />

              <img
                src={image}
                alt="Vishal"
                className="relative rounded-2xl shadow-2xl w-64 md:w-[360px] border border-white/20"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      
    </>
  );
}

export default Home;
