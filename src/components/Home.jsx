import React from "react";
import image from "../img/vishal.jpg";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { heroContent, highlights, socialLinks, siteConfig } from "../content/siteContent";

function Home() {
  const navigate = useNavigate();

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    x: FaTwitter,
  };

  return (
    <>
      <motion.section
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="grid min-h-[calc(100vh-7rem)] items-center px-0 py-6"
      >
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
              {heroContent.eyebrow}
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {heroContent.headline}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                {heroContent.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate(heroContent.primaryAction.href)}
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {heroContent.primaryAction.label}
              </button>

              <a
                href={heroContent.secondaryAction.href}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {heroContent.secondaryAction.label}
              </a>
            </div>

            <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <dt className="text-2xl font-semibold text-white">{item.value}</dt>
                  <dd className="mt-1 text-sm text-slate-400">{item.label}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-slate-400">Find me on</span>
              {socialLinks.map((link) => {
                const Icon = iconMap[link.kind];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    aria-label={link.label}
                  >
                    <Icon />
                  </a>
                );
              })}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Resume PDF
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative max-w-sm">
              <div className="absolute -inset-6 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                <img
                  src={image}
                  alt={`${siteConfig.name} portrait`}
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Home;
