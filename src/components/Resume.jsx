import React from "react";
import { FaDownload } from "react-icons/fa";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { motion } from "framer-motion";
import resumePdfUrl from "../pdf/resume.pdf";

function Resume() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <motion.section
      className="w-full text-white"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Resume</h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">Download the PDF or review it inline.</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={resumePdfUrl} download="Vishal_Singh_Resume.pdf" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              <FaDownload />
              Download PDF
            </a>

            <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              Open in New Tab
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
          <div className="h-[78vh] w-full">
            <Worker workerUrl="/pdf.worker.min.js">
              <Viewer fileUrl={resumePdfUrl} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Resume;
