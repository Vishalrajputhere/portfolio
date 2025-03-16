import React from 'react'
import { FaDownload } from "react-icons/fa";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resume from "../pdf/resume.pdf"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';


function Resume() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <>

            <motion.div className=' min-h-full min-w-full flex flex-col justify-center items-center text-white' initial={{ opacity: 0, scale: 0.9 }}  
      animate={{ opacity: 1, scale: 1 }}   
      exit={{ opacity: 0, scale: 0.9 }}    
      transition={{ duration: 0.5 }}   >

                <div className=' min-w-full  text-center mt-24 '>
                    <button className=' bg-violet-500   cursor-pointer rounded-md py-2 px-8 font-semibold font-sans transition-all duration-300 ease-in-out hover:bg-violet-700 hover:scale-105 '><FaDownload className=' inline' /><a href={resume} > <a href="../../public/resume.pdf" download="Vishal_Rajput_CV"> Download CV</a> </a></button>
                </div>

                <div className=' h-full  min-w-full mt-10 md:px-36 px-5 rounded-md'>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>

                        <Viewer fileUrl={resume} plugins={[defaultLayoutPlugin]} />

                    </Worker>
                </div>


            </motion.div>

            <footer className=' flex md:flex-row flex-col md:justify-around justify-center bg-black items-center min-h-12 text-white pt-2  md:text-2xl font-bold md:mt-8 mt-12'>
                            <div className=' my-1 mt-1'>Designed and Developed by Vishal Rajput</div>
                            <div  className=' my-3'>Copyright © 2025</div>
                            <div className="flex md:gap-6 gap-2 ">
                                <a href="https://x.com/Vishal_rajput_0" className=' hover:scale-110 transition-all ease-in-out duration-300 px-2' target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="hover:text-blue-500" />
                                </a>
                                <a href="https://www.linkedin.com/in/vishal-singh-a785b7221/" className=' hover:scale-110 transition-all ease-in-out duration-300 px-2' target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="hover:text-blue-700" />
                                </a>
                                <a href="https://github.com/Vishalrajputhere" className=' hover:scale-110 transition-all ease-in-out duration-300 px-2 mb-1' target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="hover:text-gray-500" />
                                </a>
                            </div>
                        </footer>



        </>
    )
}

export default Resume