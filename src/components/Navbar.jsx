import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../App.css';

export default function Navbar() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certs" },
    { id: "resume", label: "Resume" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-950 via-blue-900 to-gray-900 backdrop-blur-xl shadow-2xl border-b border-blue-900/40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-extrabold text-blue-400 drop-shadow-[0_0_12px_#3b82f6] tracking-wide select-none">
            Siva
          </span>
          <span className="hidden md:inline-block text-xs text-blue-200/70 font-mono tracking-widest ml-2">
            Full Stack Dev
          </span>
        </div>
        <ul className="flex gap-6 md:gap-10">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="nav-active"
                className="cursor-pointer transition-all text-lg font-semibold text-gray-300 px-2 py-1 rounded-lg
                  hover:text-blue-400 hover:bg-blue-900/30"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 ml-6">
          <a
            href="https://github.com/Siva-kalidindi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-blue-400 transition duration-300"
            style={{ filter: "drop-shadow(0 0 0px #3b82f6)" }}
            onMouseEnter={e => e.currentTarget.style.filter = "drop-shadow(0 0 12px #3b82f6)"}
            onMouseLeave={e => e.currentTarget.style.filter = "drop-shadow(0 0 0px #3b82f6)"}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/siva-kalidindi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-blue-400 transition duration-300"
            style={{ filter: "drop-shadow(0 0 0px #3b82f6)" }}
            onMouseEnter={e => e.currentTarget.style.filter = "drop-shadow(0 0 12px #3b82f6)"}
            onMouseLeave={e => e.currentTarget.style.filter = "drop-shadow(0 0 0px #3b82f6)"}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
      <style>
        {`
          .nav-active {
            color: #60a5fa !important;
            background: linear-gradient(90deg, #2563eb22 0%, #3b82f622 100%);
            box-shadow: 0 0 16px #3b82f6, 0 0 4px #2563eb;
            font-weight: bold;
            letter-spacing: 1px;
            border-radius: 0.5rem;
            transition: text-shadow 0.3s, color 0.3s, background 0.3s;
          }
        `}
      </style>
    </header>
  );
}