import React from "react";
import chatbot from "../img/chatbot.png";
import todo from "../img/todo.png";
import currency from "../img/currency_converter.png";
import proclassroom from "../img/proclassroom.png";
import paisaalens from "../img/paisaalens.png";

import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Project() {
  const projects = [
    {
      title: "Pro Classroom ⭐ (Featured)",
      img: proclassroom,
      desc: "A Google Classroom inspired MERN web app with role-based access (Student/Teacher), course management, assignments, and plagiarism/similarity detection to prevent duplicate submissions.",
      tech: [
        "MERN",
        "MongoDB",
        "Role-Based Auth",
        "Assignments",
        "Similarity Check",
      ],
      github: "https://github.com/Vishalrajputhere/pro-classroom",
      demo: "https://pro-classroom2.vercel.app/",
      featured: true,
    },
    {
      title: "PaisaaLens 💸",
      img: paisaalens,
      desc: "A full-stack personal finance and expense tracking application designed to help users manage their money efficiently with detailed insights.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "https://github.com/Vishalrajputhere/PaisaaLens",
      demo: "https://paisaalens.vercel.app/",
    },
    {
      title: "AI Chatbot",
      img: chatbot,
      desc: "Smart AI chatbot powered by Gemini AI. Built with React + Vite, Node.js and Tailwind CSS for fast responses and a modern UI.",
      tech: ["React", "Vite", "Node.js", "Tailwind"],
      github: "https://github.com/Vishalrajputhere/AI_CHATBOT",
      demo: "https://vishalrajputhere.github.io/AI_CHATBOT/",
    },
    {
      title: "Currency Converter",
      img: currency,
      desc: "Responsive Currency Converter App using React + Vite. Includes API integration, state management and responsive UI.",
      tech: ["React", "Vite", "API", "Responsive UI"],
      github: "https://github.com/Vishalrajputhere/REACT-CURRENCY-CONVERTER",
      demo: "https://vishalrajputhere.github.io/REACT-CURRENCY-CONVERTER/",
    },
    {
      title: "Task Manager (ListNest)",
      img: todo,
      desc: "A responsive task manager app built with React to manage tasks efficiently with a clean user interface.",
      tech: ["React", "UI", "Productivity"],
      github: "https://github.com/Vishalrajputhere/ListNest",
      demo: "https://vishalrajputhere.github.io/ListNest/",
    },
  ];

  return (
    <>
      <motion.section
        className="w-full min-h-screen text-white px-5 md:px-16 py-12"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center mt-10">
          <h2 className="text-4xl md:text-5xl font-black font-sans">
            My Recent <span className="text-fuchsia-500">Works</span>
          </h2>
          <p className="mt-3 text-white/80 font-semibold">
            Here are a few projects that I've worked on recently.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className={`rounded-2xl border bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden
              hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 hover:bg-white/10 group
              ${
                p.featured
                  ? "border-cyan-400/60 shadow-cyan-500/20 hover:border-cyan-400 hover:shadow-cyan-500/40"
                  : "border-fuchsia-400/20 hover:border-fuchsia-400 hover:shadow-fuchsia-500/30"
              }
`}
            >
              {/* Image */}
              <div className="p-4 relative">
                {p.featured && (
                  <span className="absolute top-6 left-6 px-3 py-1 text-xs font-bold rounded-full bg-cyan-400/15 border border-cyan-300/30 text-cyan-700">
                    Featured Project
                  </span>
                )}

                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover rounded-xl border border-white/10 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-5 pb-6">
                <h3 className="text-2xl font-black mt-2">{p.title}</h3>

                <p className="mt-3 text-white/80 font-mono text-sm leading-relaxed">
                  {p.desc}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-fuchsia-500/15 border border-fuchsia-400/30 text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => window.open(p.github, "_blank")}
                    className="flex-1 px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-500 transition font-bold"
                  >
                    <FaGithub className="inline mr-2" />
                    GitHub
                  </button>

                  <button
                    onClick={() => window.open(p.demo, "_blank")}
                    className="flex-1 px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition font-bold"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}

export default Project;
