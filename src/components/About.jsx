import React from "react";
import aboutPic from "../img/about.png";
import { motion } from "framer-motion";
import { skillGroups, timelineEntries } from "../content/siteContent";

function About() {
  const aboutVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      variants={aboutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-white"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">About the engineer</h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              I build products with a focus on reliability, clarity, and maintainability. My work spans interface design, application architecture, and the implementation details that make software feel intentional.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              I’m currently completing my MCA while building production-style projects that demonstrate systems thinking, state management, accessibility, and performance awareness.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
              <img src={aboutPic} alt="Vishal Singh portrait" className="relative w-full rounded-[2rem] border border-white/10 shadow-2xl" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.heading} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">{group.heading}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">Education and certifications</h3>
          <div className="mt-6 grid gap-4">
            {timelineEntries.map((entry) => (
              <article key={entry.title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <h4 className="text-lg font-semibold text-white">{entry.title}</h4>
                <p className="mt-1 text-sm text-cyan-200">{entry.meta}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{entry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
