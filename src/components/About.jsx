import React from 'react'
import aboutPic from '../img/about.png'
import { TbHandFingerRight, TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaJsSquare, FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiPostman, SiJupyter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';




function About() {
    const aboutVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
      };
    return (
        <>
            <motion.div variants={aboutVariants} initial="initial" animate="animate" exit="exit" className='  min-h-screen w-full  text-white '>
                

                <div className=' w-full min-h-full flex md:flex-row flex-col md:justify-around justify-center items-center px-10'>

                    <div className=' font-sans text-2xl mt-32 '>
                        <span className=' block text-center text-3xl font-bold'>Know Who <p className=' text-pink-500 inline'>I'M</p>
                        </span>
                        <span className=' block my-5'>
                            Hi Everyone, I am <p className=' text-pink-700 inline font-extrabold'>Vishal Rajput</p> from <p className=' text-pink-700 inline font-extrabold'> Delhi, India.</p>
                        </span>
                        <span className=' block my-5'>
                            I am currently pursuing MCA from C-DAC (GGSIPU), Noida.
                        </span>
                        <span className=' block my-5'>
                            I have completed BCA from BPIBS (IPU), Delhi.
                        </span>
                        <span className=' block my-5'>
                            Apart from coding, some other activities that I love to do!
                        </span>
                        <span className=' block my-5'>
                            <ul>
                                <li className=' my-1'><TbHandFingerRight className=' inline' /> Playing Cricket</li>
                                <li className=' my-1'><TbHandFingerRight className=' inline' /> Traveling</li>
                                <li className=' my-1'><TbHandFingerRight className=' inline' /> Geopolitics</li>
                            </ul>
                            <span className=' block mt-5 text-center opacity-75'>
                                "Strive to build things that make a difference!"
                            </span>
                            <span className=' block  text-center text-pink-600 font-extrabold opacity-75 '>
                                Vishal
                            </span>

                        </span>
                    </div>
                    <div className=' my-4 '>
                        <img src={aboutPic}  alt="" width="350" />
                    </div>
                </div>

                {/* 2nd */}

                <div className=' min-h-full min-w-full  flex flex-col mt-5 '>
                    <span className=' block w-full text-center text-4xl md:my-8 my-4 font-black font-sans'>Professional Skillset</span>

                    <div className=' grid grid-cols-12 md:gap-8 gap-4  md:mx-12 mx-10 text-7xl my-4 '>
                        <span className=' md:col-span-3 col-span-6 flex items-center justify-center min-h-40 rounded-md border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-fuchsia-700 border-fuchsia-400'><FaReact /></span>
                        <span className=' md:col-span-3 col-span-6 flex items-center justify-center min-h-40 rounded-md border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-fuchsia-700 border-fuchsia-400'><FaJsSquare /></span>
                        <span className=' md:col-span-3 col-span-6 flex items-center justify-center min-h-40 rounded-md border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-fuchsia-700 border-fuchsia-400'><FaJava /></span>
                        <span className=' md:col-span-3 col-span-6 flex items-center justify-center min-h-40 rounded-md border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-fuchsia-700 border-fuchsia-400'><FaNodeJs />
                        </span>
                    </div>

                    <div className=' grid grid-cols-12 sm:gap-8 gap-4  sm:mx-12 mx-10 text-7xl my-5'>
                        <span className=' md:col-span-3 col-span-6 flex items-center justify-center min-h-40 rounded-md border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-fuchsia-700 border-fuchsia-400'><TbBrandNextjs /></span>
                        <span className=' md:col-span-3 col-span-6 flex items-center justify-center min-h-40 rounded-md border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-fuchsia-700 border-fuchsia-400'><RiTailwindCssFill /></span>
                        <span className=' md:col-span-3 col-span-6 flex items-center justify-center min-h-40 rounded-md border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-fuchsia-700 border-fuchsia-400'><FaPython /></span>
                        <span className=' md:col-span-3 col-span-6 flex items-center justify-center min-h-40 rounded-md border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-fuchsia-700 border-fuchsia-400'><SiMysql />
                        </span>
                    </div>

                    <span className=' block w-full text-center text-4xl my-4 font-black font-sans'>Tools I use</span>
                    <div className=' grid grid-cols-12 md:gap-8 gap-4  md:mx-12 mx-10 text-7xl my-5'>
                        <span className=' md:col-span-4 col-span-6 flex items-center justify-center min-h-40 rounded-md border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-fuchsia-700 border-fuchsia-400'><VscVscode /></span>
                        <span className=' md:col-span-4 col-span-6  flex items-center justify-center min-h-40 rounded-md border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-fuchsia-700 border-fuchsia-400'><SiPostman /></span>
                        <span className=' md:col-span-4 col-span-6  flex items-center justify-center min-h-40 rounded-md border-2 hover:scale-105 transition-all ease-in-out duration-300 hover:border-fuchsia-700 border-fuchsia-400'><SiJupyter /></span>


                    </div>

                </div>

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

            </motion.div>

        </>
    )
}

export default About