import React from "react";
import aboutPic from "../img/about.png";
import { TbHandFingerRight, TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaJsSquare, FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiPostman, SiJupyter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

// NEW icons for timeline
import { FaGraduationCap, FaCertificate, FaBriefcase } from "react-icons/fa";

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

  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <TbBrandNextjs />, name: "Next.js" },
    { icon: <RiTailwindCssFill />, name: "Tailwind" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "MySQL" },
  ];

  const tools = [
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiJupyter />, name: "Jupyter" },
  ];

  // NEW timeline data
  const timeline = [
  {
    icon: <FaGraduationCap />,
    title: "MCA (Master of Computer Applications)",
    place: "C-DAC (GGSIPU), Noida",
    time: "2024 - 2026",
    desc: "Focused on Full Stack Development, DBMS, OS, Computer Networks and modern web technologies.",
  },
  {
    icon: <FaGraduationCap />,
    title: "BCA (Bachelor of Computer Applications)",
    place: "BPIBS (GGSIPU), Delhi",
    time: "2020 - 2023",
    desc: "Built strong fundamentals in programming, web development and database concepts.",
  },
  {
    icon: <FaCertificate />,
    title: "Python for Data Science",
    place: "IIT Kharagpur",
    time: "Certified",
    desc: "Covered Python fundamentals, data handling, analysis basics and practical problem solving for data science.",
  },
  {
    icon: <FaCertificate />,
    title: "Software Testing",
    place: "IIT Madras",
    time: "Certified",
    desc: "Learned testing fundamentals, test case writing, bug lifecycle and QA workflow with practical understanding.",
  },
  {
    icon: <FaBriefcase />,
    title: "Projects & Practical Work",
    place: "React + MERN + AI based apps",
    time: "Ongoing",
    desc: "Built multiple projects including AI chatbot, task manager and portfolio upgrades with modern UI.",
  },
];


  return (
    <>
      <motion.section
        variants={aboutVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full min-h-screen text-white px-5 md:px-16 py-12"
      >
        {/* Top Section */}
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-10">
          {/* Left */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-black font-sans text-center md:text-left">
              Know Who <span className="text-pink-500">I'M</span>
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90">
              Hi Everyone, I am{" "}
              <span className="text-pink-400 font-extrabold">Vishal Singh</span>{" "}
              from{" "}
              <span className="text-pink-400 font-extrabold">Noida, India</span>.
            </p>

            <p className="mt-4 text-lg md:text-xl text-white/90">
              I am currently pursuing MCA from{" "}
              <span className="text-pink-300 font-bold">C-DAC , Noida</span>.
            </p>

            <p className="mt-4 text-lg md:text-xl text-white/90">
              I have completed BCA from{" "}
              <span className="text-pink-300 font-bold">BPIBS (GGSIPU), Delhi</span>.
            </p>

            <p className="mt-6 text-lg md:text-xl text-white/90">
              Apart from coding, some other activities that I love to do!
            </p>

            <ul className="mt-4 space-y-2 text-lg text-white/85">
              <li className="flex items-center gap-2">
                <TbHandFingerRight className="text-pink-400" />
                Playing Cricket
              </li>
              <li className="flex items-center gap-2">
                <TbHandFingerRight className="text-pink-400" />
                Traveling
              </li>
              <li className="flex items-center gap-2">
                <TbHandFingerRight className="text-pink-400" />
                Geopolitics
              </li>
            </ul>

            <div className="mt-6 text-center md:text-left">
              <p className="opacity-80 italic">
                "Strive to build things that make a difference!"
              </p>
              <p className="text-pink-400 font-extrabold mt-1">— Vishal</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-pink-500/20 blur-2xl" />
              <img
                src={aboutPic}
                alt="About"
                className="relative w-[280px] md:w-[360px] rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="w-full max-w-6xl mx-auto mt-16">
          <h3 className="text-3xl md:text-4xl font-black font-sans text-center">
            Professional Skillset
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {skills.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center min-h-36 rounded-2xl border border-pink-400/50 bg-white/5 backdrop-blur-md shadow-lg
                hover:scale-[1.03] transition-all duration-300 hover:border-pink-500 hover:bg-white/10"
              >
                <div className="text-6xl">{item.icon}</div>
                <p className="mt-3 text-base font-bold text-white/90">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="w-full max-w-6xl mx-auto mt-16">
          <h3 className="text-3xl md:text-4xl font-black font-sans text-center">
            Tools I use
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {tools.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center min-h-36 rounded-2xl border border-pink-400/50 bg-white/5 backdrop-blur-md shadow-lg
                hover:scale-[1.03] transition-all duration-300 hover:border-pink-500 hover:bg-white/10"
              >
                <div className="text-6xl">{item.icon}</div>
                <p className="mt-3 text-base font-bold text-white/90">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NEW Timeline Section */}
        <div className="w-full max-w-6xl mx-auto mt-16">
          <h3 className="text-3xl md:text-4xl font-black font-sans text-center">
            Education & Certifications
          </h3>

          <div className="mt-10 space-y-5">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-lg
                hover:bg-white/10 transition-all duration-300"
              >
                <div className="min-w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-2xl text-pink-300">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <h4 className="text-xl font-extrabold">{item.title}</h4>
                    <span className="text-sm text-white/70 font-semibold">
                      {item.time}
                    </span>
                  </div>

                  <p className="text-white/85 font-semibold mt-1">
                    {item.place}
                  </p>

                  <p className="text-white/75 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default About;
