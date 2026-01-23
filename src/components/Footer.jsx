import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-black/90 backdrop-blur-md text-white mt-10">
      <div className="max-w-6xl mx-auto flex md:flex-row flex-col md:justify-between justify-center items-center gap-3 py-4 px-5 font-bold">
        <div>Designed and Developed by Vishal Singh</div>
        <div>Copyright © 2025</div>

        <div className="flex gap-5 text-xl">
          <a
            href="https://x.com/Vishal_rajput_0"
            className="hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-blue-500" />
          </a>

          <a
            href="https://www.linkedin.com/in/vishal-singh-a785b7221/"
            className="hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-600" />
          </a>

          <a
            href="https://github.com/Vishalrajputhere"
            className="hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
