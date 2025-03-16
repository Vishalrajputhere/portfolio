import React from 'react'
import chatbot from '../img/chatbot.png'
import todo from '../img/todo.png'
import currency from '../img/currency_converter.png'
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';


function Project() {
    const handleTask=()=>{
        window.open("https://github.com/Vishalrajputhere/ListNest")
    }
  return (
    <>
    <motion.div className=' min-h-full min-w-full text-white ' initial={{ opacity: 0, y: 50 }}  
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -50 }}   
      transition={{ duration: 0.5 }}  > 

        <div className=' flex flex-col  justify-center items-center mb-5 mt-10 '>

            <div className=' min-w-full text-center text-4xl font-sans font-bold mt-16 mb-1'>My Recent <span className=' text-fuchsia-600'>Works</span>
            </div>
            <div className=' min-w-full text-center md:mb-10 mb-5 font-semibold px-3 py-2  '>
                Here are few Projects that i've worked on recently
            </div>

            <div className=' grid md:grid-cols-12 md:gap-3 gap-5 min-w-full px-5 py-4  min-h-screen mt-5 font-mono ' >

                <div className=' md:col-span-4  border-2 border-fuchsia-300 transition-all duration-400 ease-in-out hover:border-fuchsia-600 hover:scale-105  md:mx-10 flex justify-center items-center  rounded-md '>
                    <div className=' flex flex-col justify-center items-center'>
                        <div className=' my-6'><img src={chatbot} alt="" width="300" className=' rounded-md' /></div>
                        <div className=' px-5 md:my-4 font-bold'><span className=' text-center block my-2 text-3xl font-black '>AI Chatbot</span> Your smart AI chatbot powered by Gemini AI ! Built with React and Vite , Node.js, and styled with Tailwind CSS , it delivers fast responses with a sleek, modern UI.</div>
                        <div className='  min-w-full flex justify-evenly items-center md:my-2 my-5'><button className=' border-2 border-black px-2 py-2 rounded-md font-semibold cursor-pointer bg-purple-400 transition-all duration-300 ease-in-out hover:bg-purple-600  ' onClick={()=> window.open("https://github.com/Vishalrajputhere/AI_CHATBOT")}><FaGithub className=' inline' /> Github</button>
                        <button className=' border-2 border-black px-3 py-2 rounded-md font-semibold cursor-pointer bg-purple-400 transition-all duration-300 ease-in-out hover:bg-purple-600  ' onClick={()=> window.open("https://vishalrajputhere.github.io/AI_CHATBOT/")}>Demo</button></div>

                    </div>
                </div>

                <div className=' md:col-span-4  border-2 border-fuchsia-300 transition-all duration-400 ease-in-out hover:border-fuchsia-600 hover:scale-105  md:mx-10 flex justify-center items-center  rounded-md '>
                    <div className=' flex flex-col justify-center items-center'>
                        <div className=' my-6'><img src={currency} alt="" width="300"  className=' rounded-md' /></div>
                        <div className=' px-4 md:my-4 font-bold'><span className=' text-center block my-2 text-3xl font-black'>Currency Converter</span>Developed a responsive and dynamic Currency Converter App using React and Vite. This project showcase my skills in modern web development, including state management, API integration and responsive design.</div>
                        <div className='  min-w-full flex justify-evenly items-center md:my-2 my-5'><button className=' border-2 border-black px-2 py-2 rounded-md font-semibold cursor-pointer bg-purple-400 transition-all duration-300 ease-in-out hover:bg-purple-600  ' onClick={()=> window.open("https://github.com/Vishalrajputhere/REACT-CURRENCY-CONVERTER")}><FaGithub className=' inline' /> Github</button>
                        <button className=' border-2 border-black px-3 py-2 rounded-md font-semibold cursor-pointer bg-purple-400 transition-all duration-300 ease-in-out hover:bg-purple-600  ' onClick={()=>window.open("https://vishalrajputhere.github.io/REACT-CURRENCY-CONVERTER/")}>Demo</button></div>

                    </div>
                </div>

                <div className=' md:col-span-4  border-2 border-fuchsia-300 transition-all duration-400 ease-in-out hover:border-fuchsia-600 hover:scale-105  md:mx-10 flex justify-center items-center  rounded-md '>
                    <div className=' flex flex-col justify-center items-center'>
                        <div className=' my-6'><img src={todo} alt="" width="300" className=' rounded-md' /></div>
                        <div className=' px-5 md:my-4 font-bold'><span className=' text-center block md:my-2 text-3xl font-black'>Task Manager</span>I have created a responsive task manager utilizing React. This web application aids individuals in managing their tasks efficiently, featuring a robust set of functionalities and a polished user interface.
                        </div>
                        <div className='  min-w-full flex justify-evenly items-center my-2 my-5'><button className=' border-2 border-black px-2 py-2 rounded-md font-semibold cursor-pointer bg-purple-400 transition-all duration-300 ease-in-out hover:bg-purple-600  ' onClick={handleTask}><FaGithub className=' inline' /> Github</button>
                        <button className=' border-2 border-black px-3 py-2 rounded-md font-semibold cursor-pointer bg-purple-400 transition-all duration-300 ease-in-out hover:bg-purple-600  ' onClick={()=> window.open("https://vishalrajputhere.github.io/ListNest/")}>Demo</button></div>

                    </div>
                </div>

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

export default Project