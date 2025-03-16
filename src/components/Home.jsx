import React from 'react'
import image from '../img/vishal.jpeg'
// import bgimg from '../img/bg2.jpg'
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';



function Home() {
    const pageVariants = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }
      };
      


    return (
        <>
            <motion.div variants={pageVariants} initial="initial"
      animate="animate"
      exit="exit" className="relative h-screen w-full">


                <div className=" absolute inset-0  bg-cover bg-center bg-no-repeat text-white font-semibold flex md:flex-row flex-col items-center justify-around ">
                    {/* 1 */}
                    <div className=' mt-16 px-5 md:px-0'>
                        <span className=" block my-5 md:text-4xl text-4xl font-serif">Hey i am</span>
                        <span className=' block my-5 md:text-6xl text-5xl font-serif text-fuchsia-700'>Vishal Rajput</span>
                        <span className=' block my-8 md:text-2xl text-2xl font-serif font-semibold'>
                            A Full Stack Developer
                        </span>
                        <div className=' my-5 font-mono'>
                            <span className=' block'> If you'd like to collaborate or have any questions,</span>
                            <span className=' block'>  feel free to reach out to me. I'm excited to connect with you!</span>

                        </div>
                        <div className="flex gap-6 text-3xl">
                            <a href="https://x.com/Vishal_rajput_0" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="hover:text-blue-500" />
                            </a>
                            <a href="https://www.linkedin.com/in/vishal-singh-a785b7221/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="hover:text-blue-700" />
                            </a>
                            <a href="https://github.com/Vishalrajputhere" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="hover:text-gray-500" />
                            </a>
                        </div>
                    </div>

                    {/* 2 */}
                    <div>
                        <img src={image} className=' rounded-md shadow-lg mt-10 mb-10 md:w-92 w-64 ' alt="mypic"    />
                    </div>

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

export default Home