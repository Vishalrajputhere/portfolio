import React from "react";
import { FaDownload } from "react-icons/fa";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Resume() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <motion.section
        className="w-full min-h-screen text-white px-5 md:px-16 py-12"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto mt-10">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black font-sans">
              My <span className="text-fuchsia-500">Resume</span>
            </h2>
            <p className="mt-3 text-white/80 font-semibold">
              You can view it below or download it directly.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="/resume.pdf"
                download="Vishal_Rajput_CV"
                className="bg-violet-600 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:bg-violet-800 hover:scale-105"
              >
                <FaDownload className="inline mr-2" />
                Download CV
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:bg-white/10"
              >
                Open in New Tab ↗
              </a>
            </div>
          </div>

          {/* Viewer Card */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden">
            <div className="h-[75vh] w-full">
              <Worker workerUrl="/pdf.worker.min.js">
                <Viewer
                  fileUrl="/resume.pdf"
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </div>
          </div>
        </div>

        
      </motion.section>
    </>
  );
}

export default Resume;
