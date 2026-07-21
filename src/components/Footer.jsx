import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { socialLinks } from "../content/siteContent";

function Footer() {
  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    x: FaTwitter,
  };

  return (
    <footer className="border-t border-white/10 py-6 text-sm text-slate-300">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="font-semibold text-white">Designed and developed by Vishal Singh</div>
          <div className="mt-1 text-slate-400">Copyright © 2026</div>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.kind];

            return (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <Icon className="text-base text-white" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
